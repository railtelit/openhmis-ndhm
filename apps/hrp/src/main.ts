/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApplicationConfig } from '@ndhm/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { API_VERSION } from './app/version';

async function bootstrap() {
  const port = process.env.PORT || ApplicationConfig.api.HRP_API.PORT;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = API_VERSION;
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  Logger.log(
    `🚀 HRP GATEWAY Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
