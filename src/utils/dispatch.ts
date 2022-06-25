import { WebSocket } from 'ws';
import { drawCircle } from '../drawing/drawCircle';
import { drawRectangle } from '../drawing/drawRectangle';
import { drawSquare } from '../drawing/drawSquare';
import { printScreen } from '../printScreen/printScreen';
import { printSuccess } from '../services/log.service';

const dispatch = async (
  command: string,
  x: number,
  y: number,
  value: number,
  length: number,
  ws: WebSocket
) => {
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

    case 'prnt_scrn':
      const screenShot = await printScreen(x, y, 200);
      ws.send(`prnt_scrn ${screenShot}`);
      printSuccess(command);
      break;

    default:
      break;
  }
};

export { dispatch };
