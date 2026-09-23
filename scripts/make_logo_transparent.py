from PIL import Image

src = Image.open("public/assets/logo-src.png").convert("RGBA")
pixels = src.load()
w, h = src.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r > 245 and g > 245 and b > 245:
            pixels[x, y] = (r, g, b, 0)
        elif r > 228 and g > 228 and b > 228:
            avg = (r + g + b) / 3.0
            alpha = max(0, min(255, int(255 * (248 - avg) / 20)))
            pixels[x, y] = (r, g, b, alpha)

# Crop to content so the mark fills more of the header height
bbox = src.getbbox()
if bbox:
    # small padding so edges aren't clipped
    pad = 12
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    cropped = src.crop((left, top, right, bottom))
else:
    cropped = src

cropped.save("public/assets/logo.png")
print("saved", cropped.size, "from", src.size, "bbox", bbox)
