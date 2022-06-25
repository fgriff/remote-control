import { drawCircle } from '../drawing/drawCircle';
import { printSuccess } from '../services/log.service';

const dispatch = (command: string, x: number, y: number, value: number) => {
  switch (command) {
    case 'draw_circle':
      drawCircle(x, y, value, 0.03);
      printSuccess(command);
      break;

    default:
      break;
  }
};

export { dispatch };
