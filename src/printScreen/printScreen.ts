import Jimp from 'jimp';
import { screen } from 'robotjs';

const printScreen = async (x: number, y: number, sideSize: number) => {
  const centerX = x - sideSize / 2;
  const centerY = y - sideSize / 2;

  const bitmapImg = screen.capture(centerX, centerY, sideSize, sideSize);

  const jimp = new Jimp(sideSize, sideSize);

  for (let x = 0; x < sideSize; x++) {
    for (let y = 0; y < sideSize; y++) {
      const hexColor = bitmapImg.colorAt(x, y);
      const color = parseInt(`${hexColor}ff`, 16);
      jimp.setPixelColor(color, x, y);
    }
  }

  const base64 = await jimp.getBase64Async(Jimp.MIME_PNG);

  return base64.replace('data:image/png;base64,', '');
};

export { printScreen };
