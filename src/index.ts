import express from 'express';
import logger from './logger';

const port = parseInt(process.env.PORT || '3000', 10);
const server = express();

server.listen(port, (err: Error) => {
  if (err) {
    logger.error('something bad happened', err);
  } else {
    logger.info(`> Ready on http://localhost:${port}`);
  }
});
