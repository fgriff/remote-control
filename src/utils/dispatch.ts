import { moveMouse } from 'robotjs';
import internal from 'stream';
import { WebSocket } from 'ws';
import { drawCircle } from '../drawing/drawCircle';
import { drawRectangle } from '../drawing/drawRectangle';
import { drawSquare } from '../drawing/drawSquare';
import { printScreen } from '../printScreen/printScreen';
import { printResult } from '../services/log.service';

const dispatch = async (
  command: string,
  x: number,
  y: number,
  value: number,
  length: number,
  duplex: internal.Duplex
): Promise<void> => {
  let result = '';

  switch (command) {
    case 'mouse_up':
      const yUp = y - value;
      result = `mouse_up ${value}\0`;
      duplex.write(result);
      moveMouse(x, yUp);
      printResult(result);
      break;

    case 'mouse_down':
      const yDown = y + value;
      result = `mouse_down ${value}\0`;
      duplex.write(result);
      moveMouse(x, yDown);
      printResult(result);
      break;

    case 'mouse_left':
      const xLeft = x - value;
      result = `mouse_left ${value}\0`;
      duplex.write(result);
      moveMouse(xLeft, y);
      printResult(result);
      break;

    case 'mouse_right':
      const xRight = x + value;
      result = `mouse_right ${value}\0`;
      duplex.write(result);
      moveMouse(xRight, y);
      printResult(result);
      break;

    case 'mouse_position':
      result = `mouse_position ${x} ${y}\0`;
      duplex.write(result);
      printResult(result);
      break;

    case 'draw_circle':
      result = drawCircle(x, y, value, 0.03);
      duplex.write(result);
      printResult(result);
      break;

    case 'draw_rectangle':
      result = drawRectangle(x, y, value, length, 3);
      duplex.write(result);
      printResult(result);
      break;

    case 'draw_square':
      result = drawSquare(x, y, value, 3);
      duplex.write(result);
      printResult(result);
      break;

    case 'prnt_scrn':
      result = await printScreen(x, y, 200);
      duplex.write(result);
      printResult(result);
      break;

    default:
      break;
  }
};

export { dispatch };
