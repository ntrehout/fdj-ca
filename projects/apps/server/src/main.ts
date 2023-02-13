import "@nestjs/platform-express";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { ExceptionFilter } from "./app/core/filters/exception.filter";
import { MapToAPIResponse } from "./app/core/interceptors/map-to-apiresponse.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalInterceptors(new MapToAPIResponse());
  app.useGlobalFilters(new ExceptionFilter());
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
