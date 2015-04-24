from io import BytesIO, StringIO
from PIL import Image, ImageOps, ImageDraw, ImageFont
fontsize = 20
#51 51 51 is background of company sidebar contact info
image = Image.new("RGB", (300, 50))
draw = ImageDraw.Draw(image)
text="hi!"
draw.text((0, 0), "This text is drawn on image")
#image.save('test.png', 'PNG')

#byte_io = BytesIO()
#image.save(byte_io, 'PNG')
#byte_io.seek(0)

string_io = StringIO()
image.save(string_io, 'PNG')
string_io.seek(0)
