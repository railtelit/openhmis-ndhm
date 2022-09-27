/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApplicationConfig } from '@ndhm/config';
import { Logger } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const HOST_LISTEN='0.0.0.0'
  const port = process.env.PORT || ApplicationConfig.microservice.NDHM_CLIENT.PORT;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport:Transport.TCP,
    options:{port:Number(port),
    host:HOST_LISTEN , },logger:['verbose','error']
  });
  const globalPrefix = 'api';  
  
  //app.setGlobalPrefix(globalPrefix);
  await app.listen();
  Logger.log(
    `🚀 Application Micro-Service NDHM-CLIENT  is running on all: http://${HOST_LISTEN}:${port}/${globalPrefix}`
  );
}

bootstrap();
