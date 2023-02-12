import {
  BaseResponse,
  ErrorResponse,
  SuccessResponse,
} from '@fdj-ca/shared-models';

export const createResponse = (): BaseResponse => ({
  timestamp: new Date().toISOString(),
});

export const createApiResponse = <T>(
  data: T,
  statusCode: number
): SuccessResponse<T> => ({
  ...createResponse(),
  statusCode,
  data,
  success: true,
});

export const createErrorResponse = (
  message: string,
  statusCode: number
): ErrorResponse => ({
  ...createResponse(),
  statusCode,
  success: false,
  error: {
    message,
  },
});
