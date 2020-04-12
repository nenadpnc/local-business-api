import express from 'express';
import cors from 'cors';
import logger from './logger';
import { apiRoutes } from './routes';

const port = parseInt(process.env.PORT || '3001', 10);
const server = express();

server.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3002'
  })
);
server.use(apiRoutes());

server.listen(port, (err: Error) => {
  if (err) {
    logger.error('something bad happened', err);
  } else {
    logger.info(`> Ready on http://localhost:${port}`);
  }
});
