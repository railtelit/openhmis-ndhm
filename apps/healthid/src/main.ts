/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApplicationConfig } from '@ndhm/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || ApplicationConfig.api.HEALTHID_API.PORT;
  await app.listen(port);
  Logger.log(
    `🚀 HealthId Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  
}

bootstrap();
