import { Image } from 'image-js';
import jsQR from "jsqr";
execute().catch(console.error);

async function execute() {
    let image = await Image.load('./qr_img.png');
    let grey = image
        .grey() // convert the image to greyscale.
        .resize({ width: 200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
        .rotate(30); // rotate the image clockwise by 30 degrees.
    
    await grey.save('./qr_img.png');
    const imageData= grey.getRGBAData();
    const width= grey.width;
    const height= grey.height;

const code = jsQR(imageData, width, height);

if (code) {
    console.log("Found QR code", code.data);
}
else {
    console.log("No QR code found");
  }

}