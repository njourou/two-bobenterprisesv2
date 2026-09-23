from PIL import Image

img = Image.open("public/assets/logo.jpg").convert("RGBA")
pixels = img.load()
w, h = img.size
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r > 240 and g > 240 and b > 240:
            pixels[x, y] = (r, g, b, 0)
        elif r > 220 and g > 220 and b > 220:
            avg = (r + g + b) / 3
            alpha = max(0, int(255 * (250 - avg) / 30))
            pixels[x, y] = (r, g, b, alpha)
img.save("public/assets/logo.png")
print("saved", img.size)
