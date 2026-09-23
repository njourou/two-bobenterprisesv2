from PIL import Image

src = Image.open("public/assets/logo-src.png").convert("RGBA")
px = src.load()
w, h = src.size
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r > 240 and g > 240 and b > 240:
            px[x, y] = (0, 0, 0, 0)
        elif r > 225 and g > 225 and b > 225:
            avg = (r + g + b) / 3
            a = max(0, int(255 * (248 - avg) / 23))
            px[x, y] = (r, g, b, a)

bbox = src.getbbox()
chev_bottom = 282 + 287
pad = 8
mark = src.crop((bbox[0] - pad, bbox[1] - pad, bbox[2] + pad, chev_bottom + pad))
word = src.crop((bbox[0] - pad, chev_bottom, bbox[2] + pad, bbox[3] + pad))
word = word.crop(word.getbbox())

mw, mh = mark.size
mp = mark.load()
green = Image.new("RGBA", (mw, mh), (0, 0, 0, 0))
grey = Image.new("RGBA", (mw, mh), (0, 0, 0, 0))
gp, gyp = green.load(), grey.load()
for y in range(mh):
    for x in range(mw):
        r, g, b, a = mp[x, y]
        if a < 20:
            continue
        if g > r + 12 and g > b + 8:
            gp[x, y] = (r, g, b, a)
        else:
            gyp[x, y] = (r, g, b, a)

green.save("public/assets/logo-chevron-green.png")
grey.save("public/assets/logo-chevron-grey.png")
word.save("public/assets/logo-wordmark.png")
mark.save("public/assets/logo-mark.png")
print("ok", mark.size, word.size)
