/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{transport:Transport.TCP,options:{port:3500,host:'127.0.0.1'}});
  const globalPrefix = 'api';
  //app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3500;
  await app.listen();
  Logger.log(
    `🚀 Application __ NDHM-CLIENT  is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
