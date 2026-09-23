from PIL import Image
import os

DIR = r"C:\Users\Njor\Music\two-bobenterprisesv2\public\assets\certs"
# Target logo box: wide enough for horizontal logos, fixed height canvas
BOX_W, BOX_H = 420, 200


def clear_white(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r > 248 and g > 248 and b > 248:
                px[x, y] = (r, g, b, 0)
            elif r > 235 and g > 235 and b > 235:
                avg = (r + g + b) / 3
                alpha = max(0, min(255, int(255 * (250 - avg) / 15)))
                px[x, y] = (r, g, b, alpha)
    return im


for name in os.listdir(DIR):
    if not name.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
        continue
    path = os.path.join(DIR, name)
    im = clear_white(Image.open(path))
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    # Fit into uniform canvas, centered
    canvas = Image.new("RGBA", (BOX_W, BOX_H), (0, 0, 0, 0))
    im.thumbnail((BOX_W - 24, BOX_H - 16), Image.Resampling.LANCZOS)
    x = (BOX_W - im.size[0]) // 2
    y = (BOX_H - im.size[1]) // 2
    canvas.paste(im, (x, y), im)
    out = os.path.join(DIR, name.rsplit(".", 1)[0] + ".png")
    canvas.save(out, "PNG")
    print("normalized", name, "->", out, canvas.size)
