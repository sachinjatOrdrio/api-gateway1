import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Catch(HttpException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception) {
      delete exception.message
      let message =""
      if (exception.response.message instanceof Array) {
        message = exception.response.message[0]
      }
      else {
        message = exception.response.message
      }
      const errorResponse = {
        message: message,
      };
      response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message: 'Internal server error',
      });
    }
  }
}
