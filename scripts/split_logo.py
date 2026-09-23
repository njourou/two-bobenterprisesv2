from PIL import Image

im = Image.open("public/assets/logo.png").convert("RGBA")
w, h = im.size
mark = im.crop((0, 0, w, 300))
word = im.crop((0, 300, w, h))
mb, wb = mark.getbbox(), word.getbbox()
mark, word = mark.crop(mb), word.crop(wb)
mw, mh = mark.size
side = max(mw, mh) + 8
sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
sq.paste(mark, ((side - mw) // 2, (side - mh) // 2), mark)
sq.save("public/assets/logo-mark.png")
word.save("public/assets/logo-wordmark.png")
print("mark", sq.size, "word", word.size)
