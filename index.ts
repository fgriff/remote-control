import dotenv from 'dotenv';
import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';

dotenv.config();

const HTTP_PORT = process.env.PORT || 3000;
const WS_PORT = Number(process.env.WS_PORT) || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws) => {
  console.log(`WebSocket is running on ${WS_PORT} port`);

  ws.on('message', (data) => {
    const [command, value, length] = data.toString().split(' ');
  });
});

wss.on('close', () => console.log('Connection closed'));
