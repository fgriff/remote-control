import { drawCircle } from '../drawing/drawCircle';
import { drawRectangle } from '../drawing/drawRectangle';
import { drawSquare } from '../drawing/drawSquare';
import { printSuccess } from '../services/log.service';

const dispatch = (command: string, x: number, y: number, value: number, length: number) => {
  switch (command) {
    case 'draw_circle':
      drawCircle(x, y, value, 0.03);
      printSuccess(command);
      break;

    case 'draw_rectangle':
      drawRectangle(x, y, value, length, 3);
      printSuccess(command);
      break;

    case 'draw_square':
      drawSquare(x, y, value, 3);
      printSuccess(command);
      break;

    default:
      break;
  }
};

export { dispatch };
