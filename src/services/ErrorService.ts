import * as Express from 'express';
import logger from '../logger';
import get from 'lodash.get';

export default class ErrorHandler {
  public static handle(msg: string, error: Error, res: Express.Response, status?: number): void {
    logger.error(msg, error);
    const statusCode = status || get(error, 'response.status') || 500;
    res.status(statusCode).send({ status, error: true, message: msg || error.message });
  }
}
