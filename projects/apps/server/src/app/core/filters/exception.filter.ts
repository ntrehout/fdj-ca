import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { Error } from 'mongoose';
import CastError = Error.CastError;
import { createErrorResponse } from '../../utils/api-response.utils';

@Catch()
export class ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    if (exception instanceof HttpException) {
      const statusCode = exception.getStatus();
      response
        .status(statusCode)
        .json(createErrorResponse(exception.message, statusCode));
    } else if (exception instanceof CastError) {
      response
        .status(404)
        .json(createErrorResponse('Could not cast to ObjectId', 404));
    } else {
      response
        .status(500)
        .json(createErrorResponse('Internal server error', 500));
    }
  }
}
