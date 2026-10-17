#!/usr/bin/env python3
"""Regenerate the social share card (docs/src/pages/public/og-image.png).

1200x630 is the size Twitter/X and Discord render at, and the docs advertise
`twitter:card: summary_large_image`, so this file must exist - without it every
shared docs link renders as a blank card.

Usage:  python3 scripts/make_og_image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
OUT = HERE.parent / "docs" / "src" / "pages" / "public" / "og-image.png"
LOGO = HERE.parent / "docs" / "src" / "pages" / "public" / "logo_no_bg.png"

W, H = 1200, 630

ACCENT = (171, 90, 199)  # #ab5ac7, the docs accent purple
PINK = (242, 166, 224)
TEXT = (244, 242, 248)
MUTED = (176, 168, 192)

FONTS = {
    "black": [("/System/Library/Fonts/Supplemental/Arial Black.ttf", 0)],
    "bold": [
        ("/System/Library/Fonts/Avenir Next.ttc", 0),
        ("/System/Library/Fonts/HelveticaNeue.ttc", 1),
    ],
    "regular": [
        ("/System/Library/Fonts/SFNS.ttf", 0),
        ("/System/Library/Fonts/Helvetica.ttc", 0),
    ],
}


def font(kind: str, size: int) -> ImageFont.FreeTypeFont:
    for path, index in FONTS[kind]:
        try:
            return ImageFont.truetype(path, size, index=index)
        except OSError:
            continue
    return ImageFont.load_default()


def background() -> Image.Image:
    img = Image.new("RGB", (W, H))
    top, bottom = (22, 15, 30), (13, 10, 20)
    for y in range(H):
        t = y / H
        img.paste(tuple(round(a + (b - a) * t) for a, b in zip(top, bottom)), (0, y, W, y + 1))
    glow = Image.new("RGB", (W, H), (0, 0, 0))
    draw = ImageDraw.Draw(glow)
    draw.ellipse((W - 620, -260, W + 320, 520), fill=(58, 26, 82))
    draw.ellipse((-320, 300, 380, 900), fill=(30, 18, 56))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    return Image.blend(img, Image.blend(img, glow, 0.85), 0.75)


def wrap(draw, text, font, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def main() -> None:
    img = background()
    draw = ImageDraw.Draw(img)

    logo = Image.open(LOGO).convert("RGBA")
    logo.thumbnail((330, 330), Image.LANCZOS)
    img.paste(logo, (64, (H - logo.height) // 2), logo)

    x = 452
    max_w = W - x - 64
    y = 96

    draw.text((x, y), "EyeTrackVR", font=font("black", 78), fill=TEXT)
    y += 104

    for line in wrap(draw, "Open-source, affordable VR eye tracking", font("bold", 40), max_w):
        draw.text((x, y), line, font=font("bold", 40), fill=PINK)
        y += 52
    y += 14
    draw.rounded_rectangle((x, y, x + 96, y + 5), radius=3, fill=ACCENT)
    y += 34

    body = (
        "Build your own eye tracker for VRChat, social VR and PCVR. "
        "Open hardware, open firmware, OSC out of the box."
    )
    for line in wrap(draw, body, font("regular", 27), max_w):
        draw.text((x, y), line, font=font("regular", 27), fill=MUTED)
        y += 38

    draw.text(
        (x, H - 96),
        "docs.eyetrackvr.dev",
        font=font("bold", 30),
        fill=ACCENT,
    )
    draw.text(
        (x, H - 60),
        "MIT licensed  ·  community built  ·  your data stays on your PC",
        font=font("regular", 20),
        fill=(124, 116, 142),
    )

    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
