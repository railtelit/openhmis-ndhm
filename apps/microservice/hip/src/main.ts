/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { KafkaOptions, MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

const LISTEN_ADDRESS= process.env.LISTTEN_ADDRESS || `0.0.0.0`;
//const KAFKA_BROKER_COUNT=Number(process.env.KAFKA_BROKER_COUNT)||1;
const KAFKA_BROKER_ADDRESSLIST=process.env.KAFKA_BROKER_ADDRESSLIST||`192.168.1.26:9092`
async function bootstrap() {
  console.log(`Brokers `,KAFKA_BROKER_ADDRESSLIST);
  const  brokers:string[]=KAFKA_BROKER_ADDRESSLIST.split(',')
  const app = await NestFactory.createMicroservice<KafkaOptions>(AppModule,{     
     transport:Transport.KAFKA,options:{client:{brokers},consumer:{groupId:'HIP'},
           
        },
  });
  // const globalPrefix = 'api';
  //app.setGlobalPrefix(globalPrefix);
  // const port = process.env.PORT || 3333;

  await app.listen();
  Logger.log(
    `🚀 HIP KAFKA MICROSERVICE CONSUMER Application is running `,brokers
  );
}

bootstrap();
