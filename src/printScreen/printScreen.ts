import Jimp from 'jimp';
import { screen } from 'robotjs';

const printScreen = async (x: number, y: number, sideSize: number) => {
  const bitmapImg = screen.capture(x, y, sideSize, sideSize);

  const jimp = new Jimp({
    data: bitmapImg.image,
    width: bitmapImg.width,
    height: bitmapImg.height,
  });

  const base64 = await jimp.getBase64Async(Jimp.MIME_PNG);

  return base64.replace('data:image/png;base64,', '');
};

export { printScreen };
