import { dragMouse, mouseToggle } from 'robotjs';

const drawRectangle = (x: number, y: number, width: number, height: number, speed: number) => {
  mouseToggle('down');

  const startX = x;
  const startY = y;
  const rightTop = startX + width;
  const rightBottom = startY + height;

  for (let i = 0; i <= width; i += speed) {
    dragMouse(startX + i, startY);
  }

  for (let i = 0; i <= height; i += speed) {
    dragMouse(rightTop, startY + i);
  }

  for (let i = 0; i <= width; i += speed) {
    dragMouse(rightTop - i, rightBottom);
  }

  for (let i = 0; i <= height; i += speed) {
    dragMouse(startX, rightBottom - i);
  }

  mouseToggle('up');
};

export { drawRectangle };
