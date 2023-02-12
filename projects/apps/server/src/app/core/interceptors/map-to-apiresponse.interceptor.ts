import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Response } from '@fdj-ca/shared-models';
import { createApiResponse } from '../../utils/api-response.utils';

@Injectable()
export class MapToAPIResponse<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next
      .handle()
      .pipe(
        map((data) =>
          createApiResponse(
            data,
            context.switchToHttp().getResponse().statusCode
          )
        )
      );
  }
}
