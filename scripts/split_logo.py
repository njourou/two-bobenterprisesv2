from PIL import Image

im = Image.open("public/assets/logo.png").convert("RGBA")
w, h = im.size
# Find gap between chevrons and wordmark
px = im.load()
row_counts = []
for y in range(h):
    c = sum(1 for x in range(w) if px[x, y][3] > 20)
    row_counts.append(c)

# find largest empty gap in middle third
best = None
y = 0
while y < h:
    if row_counts[y] < 8:
        start = y
        while y < h and row_counts[y] < 8:
            y += 1
        gap = (start, y)
        if best is None or (gap[1] - gap[0]) > (best[1] - best[0]):
            if start > h * 0.25 and y < h * 0.85:
                best = gap
    else:
        y += 1

split_y = (best[0] + best[1]) // 2 if best else int(h * 0.55)
print("split_y", split_y, "gap", best)

mark = im.crop((0, 0, w, split_y))
word = im.crop((0, split_y, w, h))
mb, wb = mark.getbbox(), word.getbbox()
mark, word = mark.crop(mb), word.crop(wb)

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
print("mark", mark.size, "word", word.size, "green", green.getbbox(), "grey", grey.getbbox())
