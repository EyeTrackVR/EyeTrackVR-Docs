#!/usr/bin/env python3
"""Regenerate the link-preview thumbnail (docs/src/pages/public/og-logo.png).

Link previews use a small square mark next to the page title and description
(`twitter:card = summary`) rather than a wide banner: in Discord, Slack and
friends that renders as a compact card where the text does the talking.

The thumbnail is the logo in ink on the site's paper colour, with the eyes in
the brand lavender. It is opaque on purpose, since the source mark is white on
transparent and would vanish on a light chat background.
If you change SIZE, update `og:image:width/height` in docs/.vitepress/seo.js.

Usage:  python3 scripts/make_og_image.py
"""

from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
PUBLIC = HERE.parent / "docs" / "src" / "pages" / "public"
LOGO = PUBLIC / "logo_no_bg.png"
OUT = PUBLIC / "og-logo.png"

SIZE = 512
MARGIN = 84

# theme.css tokens (light)
PAPER = (250, 249, 247)  # --etvr-paper
INK = (31, 29, 38)  # --etvr-ink
LAVENDER = (181, 160, 238)  # brand purple

# The source mark is white, with the eyes shaded towards this pink.
PINK_GREEN = 217


def main() -> None:
    logo = Image.open(LOGO).convert("RGBA")
    logo = logo.crop(logo.getbbox())
    logo.thumbnail((SIZE - 2 * MARGIN, SIZE - 2 * MARGIN), Image.LANCZOS)

    # Recolour: white -> ink, pink shading -> lavender, keeping the alpha.
    recoloured = Image.new("RGBA", logo.size)
    src, dst = logo.load(), recoloured.load()
    for y in range(logo.height):
        for x in range(logo.width):
            _, g, _, a = src[x, y]
            t = max(0.0, min(1.0, (255 - g) / (255 - PINK_GREEN)))
            dst[x, y] = tuple(round(i + (l - i) * t) for i, l in zip(INK, LAVENDER)) + (a,)

    img = Image.new("RGB", (SIZE, SIZE), PAPER)
    img.paste(
        recoloured,
        ((SIZE - recoloured.width) // 2, (SIZE - recoloured.height) // 2),
        recoloured,
    )
    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
