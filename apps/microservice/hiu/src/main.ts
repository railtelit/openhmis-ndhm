/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApplicationConfig, EnvironmentNames } from '@ndhm/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { KafkaOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
const KAFKA_BROKER_ADDRESSLIST=process.env[EnvironmentNames.kafka.BROKER_ADDRESSLIST]||ApplicationConfig.kafka.DEFAULT_BROKERS
async function bootstrap() {
  const port = process.env.PORT || 3333;
  const app = await NestFactory.createMicroservice<KafkaOptions>(AppModule,{
      transport:Transport.KAFKA,options:{
            client:{brokers:KAFKA_BROKER_ADDRESSLIST.split(',') },
            consumer:{groupId:'HIU'}
      }
  });
  const globalPrefix = 'api';
  //app.setGlobalPrefix(globalPrefix);
  await app.listen();
  Logger.log(
    `🚀 HIU KAFKA Microservice Application is running on: http://localhost:${port}/`
  );
}

bootstrap();
