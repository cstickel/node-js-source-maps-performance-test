import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(Error)
export class GenericExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception instanceof HttpException ? exception.getStatus() : 500;

    // imagine some developer accidentally forgot to filter the
    // HttpException (where a stack trace is not required)
    console.log(exception.stack);

    response
      .status(status)
      .json({ message: exception.message });
  }
}
