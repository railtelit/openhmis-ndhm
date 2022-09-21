/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
const LISTEN_ADDRESS=process.env.LISTEN_ADDRESS||`0.0.0.0`
async function bootstrap() {
  const port = Number(process.env.PORT) || 3400;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
        options:{host:LISTEN_ADDRESS,port}
  });
  const globalPrefix = 'api';
  //app.setGlobalPrefix(globalPrefix);
  await app.listen();
  Logger.log(
    `🚀 ndhmStore Application is running on: http://localhost:${port}`
  );
}

bootstrap();
