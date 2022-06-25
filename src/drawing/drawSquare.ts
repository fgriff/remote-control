import { dragMouse, mouseToggle } from 'robotjs';

const drawSquare = (x: number, y: number, sideSize: number, speed: number) => {
  mouseToggle('down');

  const startX = x;
  const startY = y;
  const rightTop = startX + sideSize;
  const rightBottom = startY + sideSize;

  for (let i = 0; i <= sideSize; i += speed) {
    dragMouse(startX + i, startY);
  }

  for (let i = 0; i <= sideSize; i += speed) {
    dragMouse(rightTop, startY + i);
  }

  for (let i = 0; i <= sideSize; i += speed) {
    dragMouse(rightTop - i, rightBottom);
  }

  for (let i = 0; i <= sideSize; i += speed) {
    dragMouse(startX, rightBottom - i);
  }

  mouseToggle('up');
};

export { drawSquare };
