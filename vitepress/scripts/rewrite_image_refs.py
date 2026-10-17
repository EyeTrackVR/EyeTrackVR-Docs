#!/usr/bin/env python3
"""Normalise image references and apply the .png -> .jpg renames.

Two problems are fixed here:

  * Markdown referenced images as `../public/imgs/...`. Because that path is
    resolvable from the source tree, Vite *bundled and hashed* a second copy of
    every image into `assets/` while VitePress also copied `public/` verbatim -
    the site shipped the same images twice (249 MB dist for ~126 MB of images).
    Absolute `/imgs/...` paths are served straight from `public/` and are
    depth-independent.
  * Vue `ImageCard` options used runtime-relative `../imgs/...` strings, which
    only resolve correctly by accident of the current URL shape.

Usage:  python3 scripts/rewrite_image_refs.py [--dry-run]
"""

import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE.parent / "docs" / "src"
RENAME_LOG = HERE / "image_renames.json"

SUBS = (
    ("../public/imgs/", "/imgs/"),
    ("../imgs/", "/imgs/"),
    ("./imgs/", "/imgs/"),
)


def main() -> int:
    dry = "--dry-run" in sys.argv
    renames = json.loads(RENAME_LOG.read_text()) if RENAME_LOG.exists() else {}
    files = [p for ext in ("md", "ts", "vue") for p in SRC.rglob(f"*.{ext}")]
    touched = 0
    hits = 0

    for path in files:
        text = original = path.read_text(encoding="utf-8")
        for old, new in SUBS:
            hits += text.count(old)
            text = text.replace(old, new)
        for old_name, new_name in renames.items():
            pattern = re.compile(re.escape(old_name) + r"\b")
            text, n = pattern.subn(new_name, text)
            hits += n
        if text != original:
            touched += 1
            if not dry:
                path.write_text(text, encoding="utf-8")
            print(f"  updated {path.relative_to(SRC)}")

    print(f"{'[dry-run] ' if dry else ''}{hits} references rewritten across {touched} files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
