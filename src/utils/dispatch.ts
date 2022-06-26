import { moveMouse } from 'robotjs';
import { WebSocket } from 'ws';
import { drawCircle } from '../drawing/drawCircle';
import { drawRectangle } from '../drawing/drawRectangle';
import { drawSquare } from '../drawing/drawSquare';
import { printScreen } from '../printScreen/printScreen';
import { printMouseNav, printSuccess } from '../services/log.service';

const dispatch = async (
  command: string,
  x: number,
  y: number,
  value: number,
  length: number,
  ws: WebSocket
) => {
  switch (command) {
    case 'mouse_up':
      const yUp = y - value;
      ws.send('mouse_up');
      moveMouse(x, yUp);
      printMouseNav(command, yUp);
      break;

    case 'mouse_down':
      const yDown = y + value;
      ws.send('mouse_down');
      moveMouse(x, yDown);
      printMouseNav(command, yDown);
      break;

    case 'mouse_left':
      const xLeft = x - value;
      ws.send('mouse_left');
      moveMouse(xLeft, y);
      printMouseNav(command, xLeft);
      break;

    case 'mouse_right':
      const xRight = x + value;
      ws.send('mouse_right');
      moveMouse(xRight, y);
      printMouseNav(command, xRight);
      break;

    case 'mouse_position':
      ws.send(`mouse_position ${x} ${y}`);
      printMouseNav(command, x, y);
      break;

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
