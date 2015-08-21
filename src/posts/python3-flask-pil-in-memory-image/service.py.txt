import re
from io import BytesIO
from flask import Flask, abort, send_file
from PIL import Image, ImageDraw

app = Flask(__name__)

@app.route('/<dimensions>')
def generate_image(dimensions):
    #Extract digits from request variable e.g 200x300
    sizes = [int(s) for s in re.findall(r'\d+', dimensions)]
    if len(sizes) != 2:
      abort(400)
    width = sizes[0]
    height = sizes[1]
    
    image = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(image)
    
    #Position text roughly in the center
    draw.text((width/2 - 25, height/2 - 5), dimensions)

    byte_io = BytesIO()
    image.save(byte_io, 'PNG')
    byte_io.seek(0)

    return send_file(byte_io, mimetype='image/png')
        
if __name__ == '__main__':
    app.run(debug=True)
 
