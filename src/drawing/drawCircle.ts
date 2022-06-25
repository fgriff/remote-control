import { dragMouse, mouseToggle } from 'robotjs';

const drawCircle = (x: number, y: number, radius: number, speed: number) => {
  mouseToggle('down');

  for (let i = 0; i <= Math.PI * 2; i += speed) {
    const coord_x = x + radius * Math.cos(i) - radius + 3;
    const coord_y = y + radius * Math.sin(i);

    dragMouse(coord_x, coord_y);
  }

  mouseToggle('up');
};

export { drawCircle };
