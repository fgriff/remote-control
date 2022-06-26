import dotenv from 'dotenv';
import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import robot, { getMousePos } from 'robotjs';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { dispatch } from './src/utils/dispatch';

dotenv.config();

const HTTP_PORT = process.env.PORT || 3000;
const WS_PORT = Number(process.env.WS_PORT) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws) => {
  console.log(`WebSocket is running on ${WS_PORT} port`);

  ws.setMaxListeners(0);

  ws.on('message', (data) => {
    const [command, value, length] = data.toString().split(' ');
    const { x, y } = getMousePos();
    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

    dispatch(command, x, y, +value, +length, duplex);
  });
});

wss.on('close', () => console.log('Connection closed'));
