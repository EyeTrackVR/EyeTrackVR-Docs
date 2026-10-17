#!/usr/bin/env python3
"""Lossy-but-safe image diet for the docs image library (SEO / Core Web Vitals).

The docs ship ~126 MB of images, much of it untouched camera output (6240x4160
JPEGs) and photographic PNGs. Large images are the single biggest LCP cost on
the build guides, so this script:

  1. downsamples every raster to MAX_DIM on its longest edge
  2. re-encodes JPEGs (progressive, metadata stripped)
  3. re-encodes PNGs, quantising to 256 colours only when the visual error is
     negligible (screenshots/diagrams)
  4. converts *photographic* PNGs (no transparency, PNG >> JPEG) to .jpg and
     converts any remaining heavyweight PNG (renders/screenshots with alpha) to
     .webp, recording every rename in scripts/image_renames.json so references
     can be rewritten by scripts/rewrite_image_refs.py

Animated GIFs and SVGs are left alone. Re-running is cheap and idempotent.

Usage:  python3 scripts/optimize_images.py [--dry-run]
"""

import io
import json
import os
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageStat

Image.MAX_IMAGE_PIXELS = None

HERE = Path(__file__).resolve().parent
PUBLIC = HERE.parent / "docs" / "src" / "pages" / "public"
IMG_DIR = PUBLIC / "imgs"
RENAME_LOG = HERE / "image_renames.json"

MAX_DIM = 1600          # longest edge
JPEG_QUALITY = 82
PNG_QUANT_RMS = 3.0     # max per-channel RMS error allowed for 256-colour quantisation
PHOTO_PNG_BYTES = 400_000
PHOTO_JPEG_RATIO = 0.5  # convert PNG -> JPEG only when JPEG is under this fraction
WEBP_PNG_BYTES = 300_000
WEBP_RATIO = 0.6        # convert PNG -> WebP only when WebP is under this fraction
WEBP_QUALITY = 85
MIN_WIN = 0.9           # only rewrite a file when the new encoding is <90% of the old one


def encode(im: Image.Image, fmt: str, **kw) -> bytes:
    buf = io.BytesIO()
    im.save(buf, fmt, **kw)
    return buf.getvalue()


def normalise(im: Image.Image) -> Image.Image:
    """Reduce exotic modes to something Pillow can re-encode predictably."""
    if im.mode == "P":
        return im.convert("RGBA" if "transparency" in im.info else "RGB")
    if im.mode in ("LA", "I;16", "I"):
        return im.convert("RGBA" if im.mode == "LA" else "L")
    return im


def has_alpha(im: Image.Image) -> bool:
    if im.mode not in ("RGBA", "LA"):
        return False
    alpha = im.getchannel("A")
    return alpha.getextrema()[0] < 250


def downscale(im: Image.Image) -> Image.Image:
    w, h = im.size
    scale = min(1.0, MAX_DIM / max(w, h))
    if scale == 1.0:
        return im
    return im.resize((max(1, round(w * scale)), max(1, round(h * scale))), Image.LANCZOS)


def quantise_if_safe(im: Image.Image) -> bytes:
    """Return the smaller of full-colour / 256-colour PNG for flat artwork."""
    full = encode(im, "PNG", optimize=True, compress_level=9)
    if has_alpha(im):
        q = im.quantize(colors=256, method=Image.FASTOCTREE)
        cmp_against = im.convert("RGBA")
    else:
        q = im.convert("RGB").quantize(colors=256, method=Image.FASTOCTREE)
        cmp_against = im.convert("RGB")
    diff = ImageChops.difference(cmp_against, q.convert(cmp_against.mode))
    rms = sum(ImageStat.Stat(diff).rms) / len(ImageStat.Stat(diff).rms)
    if rms > PNG_QUANT_RMS:
        return full
    quantised = encode(q, "PNG", optimize=True, compress_level=9)
    return quantised if len(quantised) < len(full) else full


def main() -> int:
    dry = "--dry-run" in sys.argv
    renames: dict[str, str] = {}
    if RENAME_LOG.exists():
        # keep the history of renames so rewrite_image_refs.py stays idempotent
        try:
            renames.update(json.loads(RENAME_LOG.read_text()))
        except json.JSONDecodeError:
            pass
    before = after = 0
    converted = shrunk = 0

    for path in sorted(IMG_DIR.rglob("*")):
        if not path.is_file():
            continue
        ext = path.suffix.lower()
        if ext not in (".png", ".jpg", ".jpeg"):
            continue
        original_size = path.stat().st_size
        original_bytes = path.read_bytes()
        before += original_size
        try:
            im = Image.open(path)
            fmt = im.format
            im.load()
        except Exception as exc:  # pragma: no cover - defensive
            print(f"!! skipping {path.name}: {exc}")
            continue

        im = downscale(normalise(im))

        if fmt == "PNG":
            photo_like = not has_alpha(im)
            jpeg_bytes = (
                encode(im.convert("RGB"), "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
                if photo_like
                else None
            )
            png_bytes = quantise_if_safe(im)
            if (
                jpeg_bytes is not None
                and len(png_bytes) > PHOTO_PNG_BYTES
                and len(jpeg_bytes) < len(png_bytes) * PHOTO_JPEG_RATIO
                and len(jpeg_bytes) < original_size * MIN_WIN
            ):
                new_path = path.with_suffix(".jpg")
                if not dry:
                    new_path.write_bytes(jpeg_bytes)
                    path.unlink()
                renames[path.name] = new_path.name
                converted += 1
                after += len(jpeg_bytes)
                continue
            if len(png_bytes) > WEBP_PNG_BYTES:
                webp_bytes = encode(im, "WEBP", quality=WEBP_QUALITY, method=4)
                if len(webp_bytes) < len(png_bytes) * WEBP_RATIO and len(webp_bytes) < original_size * MIN_WIN:
                    new_path = path.with_suffix(".webp")
                    if not dry:
                        new_path.write_bytes(webp_bytes)
                        path.unlink()
                    renames[path.name] = new_path.name
                    converted += 1
                    after += len(webp_bytes)
                    continue
            if not dry and len(png_bytes) < original_size * MIN_WIN:
                path.write_bytes(png_bytes)
            after += min(len(png_bytes), original_size)
        else:
            jpeg_bytes = encode(
                im.convert("RGB"), "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True
            )
            if len(jpeg_bytes) < original_size * MIN_WIN:
                if not dry:
                    path.write_bytes(jpeg_bytes)
                after += len(jpeg_bytes)
            else:
                after += original_size

        shrunk += 1

    if not dry:
        RENAME_LOG.write_text(json.dumps(renames, indent=2, sort_keys=True) + "\n")

    print(
        f"{'[dry-run] ' if dry else ''}{shrunk} images processed, "
        f"{converted} photographic PNG -> JPG\n"
        f"  before:    {before / 1e6:6.1f} MB\n"
        f"  after:     {after / 1e6:6.1f} MB\n"
        f"  saved:     {(before - after) / 1e6:6.1f} MB "
        f"({(1 - after / before) * 100:.0f}%)"
    )
    if renames:
        print(f"  renames written to {RENAME_LOG.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
