#!/usr/bin/env python3
"""Regenerate the social share card (docs/src/pages/public/og-image.png).

The card is a short 1200x480 banner (2.5:1) so Discord/Slack embeds stay
compact; the lockup is centred so Twitter/X's 1.91:1 crop never clips it.
If you change W/H, update `og:image:width/height` in docs/.vitepress/seo.js.

Fonts: Inter is preferred (matches the site). Point INTER_DIR at a folder
holding Inter-*.ttf/otf (e.g. the extras/ttf folder of the Inter release zip),
or install Inter system-wide; otherwise Segoe UI / Helvetica are used.

Usage:  python3 scripts/make_og_image.py
"""

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
OUT = HERE.parent / "docs" / "src" / "pages" / "public" / "og-image.png"
LOGO = HERE.parent / "docs" / "src" / "pages" / "public" / "logo_no_bg.png"

W, H = 1200, 480

# theme.css tokens
BG = (9, 9, 12)  # --etvr-bg
LINE = (43, 43, 50)  # --etvr-line
ACCENT = (181, 160, 238)  # --etvr-accent
TEXT = (242, 240, 245)  # --etvr-text
MUTED = (153, 151, 159)  # --etvr-muted
FAINT = (98, 96, 106)

INTER_DIRS = [
    os.environ.get("INTER_DIR", ""),
    str(Path.home() / "Library/Fonts"),
    "/Library/Fonts",
    "/usr/share/fonts/opentype/inter",
    "/usr/share/fonts/truetype/inter",
    str(Path(os.environ.get("LOCALAPPDATA", "")) / "Microsoft/Windows/Fonts"),
    "C:/Windows/Fonts",
]

FALLBACKS = {
    "SemiBold": [
        ("C:/Windows/Fonts/seguisb.ttf", 0),
        ("/System/Library/Fonts/HelveticaNeue.ttc", 1),
    ],
    "Regular": [
        ("C:/Windows/Fonts/segoeui.ttf", 0),
        ("/System/Library/Fonts/Helvetica.ttc", 0),
    ],
}


def font(weight: str, size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        (str(Path(d) / f"Inter-{weight}.{ext}"), 0)
        for d in INTER_DIRS
        if d
        for ext in ("ttf", "otf")
    ]
    for path, index in candidates + FALLBACKS[weight]:
        try:
            return ImageFont.truetype(path, size, index=index)
        except OSError:
            continue
    return ImageFont.load_default(size)


def background() -> Image.Image:
    img = Image.new("RGB", (W, H), BG)
    # one faint accent glow behind the lockup, nothing else
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((W // 2 - 420, H // 2 - 170, W // 2 + 420, H // 2 + 170), fill=255)
    glow = glow.filter(ImageFilter.GaussianBlur(140)).point(lambda v: v * 0.10)
    img.paste(Image.new("RGB", (W, H), ACCENT), mask=glow)
    return img


def main() -> None:
    img = background()
    draw = ImageDraw.Draw(img)

    word_font = font("SemiBold", 84)
    tag_font = font("Regular", 28)
    url_font = font("Regular", 20)

    logo = Image.open(LOGO).convert("RGBA")
    logo = logo.crop(logo.getbbox())
    logo.thumbnail((112, 112), Image.LANCZOS)

    # wordmark: "EyeTrack" + accent "VR", sitting next to the logo
    left, right = "EyeTrack", "VR"
    left_w = draw.textlength(left, font=word_font)
    word_w = left_w + draw.textlength(right, font=word_font)
    gap = 32
    lockup_w = logo.width + gap + word_w
    x = round((W - lockup_w) / 2)

    ascent, descent = word_font.getmetrics()
    cap_top, cap_bottom = word_font.getbbox("E")[1], word_font.getbbox("E")[3]
    tagline = "Open-source, affordable VR eye tracking"
    tag_h = tag_font.getbbox(tagline)[3]
    block_h = max(logo.height, cap_bottom - cap_top) + 36 + tag_h
    top = round((H - block_h) / 2) - 8

    row_h = max(logo.height, cap_bottom - cap_top)
    img.paste(logo, (x, top + (row_h - logo.height) // 2), logo)
    text_x = x + logo.width + gap
    text_y = top + (row_h - (cap_bottom - cap_top)) // 2 - cap_top
    draw.text((text_x, text_y), left, font=word_font, fill=TEXT)
    draw.text((text_x + left_w, text_y), right, font=word_font, fill=ACCENT)

    tag_y = top + row_h + 36
    draw.text((W / 2, tag_y), tagline, font=tag_font, fill=MUTED, anchor="mt")

    # footer: hairline + url
    draw.line((W / 2 - 40, H - 78, W / 2 + 40, H - 78), fill=LINE, width=2)
    draw.text((W / 2, H - 48), "docs.eyetrackvr.dev", font=url_font, fill=FAINT, anchor="mm")

    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
