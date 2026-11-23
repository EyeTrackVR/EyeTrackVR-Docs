#!/usr/bin/env python3
"""Regenerate the link-preview thumbnail (docs/src/pages/public/og-mark.png).

Link previews use a small square mark next to the page title and description
(`twitter:card = summary`) rather than a wide banner: in Discord, Slack and
friends that renders as a compact card where the text does the talking.

The thumbnail is the normal white logo on a rounded dark tile, the same mark
the site shows in its header (logo_tile.svg). The corners are transparent, so
it sits on light and dark chat backgrounds alike.
If you change SIZE, update `og:image:width/height` in docs/.vitepress/seo.js.

Usage:  python3 scripts/make_og_image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw

HERE = Path(__file__).resolve().parent
PUBLIC = HERE.parent / "docs" / "src" / "pages" / "public"
LOGO = PUBLIC / "logo_no_bg.png"
OUT = PUBLIC / "og-mark.png"

SIZE = 512
RADIUS = 112  # same 22% corner as logo_tile.svg
MARGIN = 78

TILE = (31, 29, 38, 255)  # --etvr-ink in theme.css
SCALE = 4  # supersample so the rounded corners come out smooth


def main() -> None:
    big = SIZE * SCALE
    tile = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle((0, 0, big - 1, big - 1), RADIUS * SCALE, fill=TILE)
    tile = tile.resize((SIZE, SIZE), Image.LANCZOS)

    logo = Image.open(LOGO).convert("RGBA")
    logo = logo.crop(logo.getbbox())
    logo.thumbnail((SIZE - 2 * MARGIN, SIZE - 2 * MARGIN), Image.LANCZOS)
    tile.alpha_composite(logo, ((SIZE - logo.width) // 2, (SIZE - logo.height) // 2))

    tile.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
