import hashlib
import os
import re
import zipfile
from collections import defaultdict
from io import BytesIO

from PIL import Image

SRC = r"C:\Users\Njor\Downloads\Telegram Desktop\website photos.xlsx"
OUT = r"C:\Users\Njor\Music\two-bobenterprisesv2\public\work"
MANIFEST = r"C:\Users\Njor\Music\two-bobenterprisesv2\.tmp_photo_manifest.txt"

ROW_CATS = {
    4: "hvac",
    5: "electrical",
    6: "ups",
    7: "generator",
    8: "cctv",
    9: "solar",
}

z = zipfile.ZipFile(SRC)
xml = z.read("xl/drawings/drawing1.xml").decode("utf-8", errors="replace")
rels = z.read("xl/drawings/_rels/drawing1.xml.rels").decode("utf-8", errors="replace")
rid_map = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', rels))

anchors = re.findall(
    r"<(?:xdr:)?(?:twoCellAnchor|oneCellAnchor)[\s\S]*?</(?:xdr:)?(?:twoCellAnchor|oneCellAnchor)>",
    xml,
)

by_cat = defaultdict(list)
for a in anchors:
    mrow = re.search(r"<(?:xdr:)?from>[\s\S]*?<(?:xdr:)?row>(\d+)</", a)
    mrid = re.search(r'r:embed="(rId\d+)"', a)
    if not mrow or not mrid:
        continue
    excel_row = int(mrow.group(1)) + 1
    rid = mrid.group(1)
    t = rid_map[rid]
    media = "xl/" + t[3:] if t.startswith("../") else t
    cat = ROW_CATS.get(excel_row, f"row{excel_row}")
    by_cat[cat].append(media)
    print(excel_row, cat, media)

os.makedirs(OUT, exist_ok=True)
existing = sorted(f for f in os.listdir(OUT) if f.startswith("work-"))
hashes = set()
for f in existing:
    with open(os.path.join(OUT, f), "rb") as fh:
        hashes.add(hashlib.md5(fh.read()).hexdigest())

start = 19
n = start
manifest = []
for cat in ["hvac", "electrical", "ups", "generator", "cctv", "solar"]:
    for media in by_cat[cat]:
        data = z.read(media.replace("\\", "/"))
        h = hashlib.md5(data).hexdigest()
        if h in hashes:
            print("skip dup", cat, media)
            continue
        hashes.add(h)
        im = Image.open(BytesIO(data)).convert("RGB")
        im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        name = f"work-{n:02d}.jpg"
        im.save(os.path.join(OUT, name), "JPEG", quality=85, optimize=True)
        manifest.append((name, cat, f"{im.size[0]}x{im.size[1]}"))
        print("saved", name, cat, im.size)
        n += 1

with open(MANIFEST, "w", encoding="utf-8") as fh:
    for item in manifest:
        fh.write("|".join(item) + "\n")

print("TOTAL NEW", len(manifest))
