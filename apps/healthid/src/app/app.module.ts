import { HealthidServiceModule } from '@ndhm/healthid-service';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const MS_NDHM_CLIENT_HOST = process.env.MS_NDHM_CLIENT_HOST||'127.0.0.1'
const MS_NDHM_CLIENT_PORT = process.env.MS_NDHM_CLIENT_PORT||3500

const KAFKA_BROKER_ADDRESSLIST=process.env.KAFKA_BROKER_ADDRESSLIST||`192.168.1.26:9092`

@Module({
  imports: [
    ClientsModule.register([
      {name:'NDHM_CLIENT_SERVICE',options:{host:MS_NDHM_CLIENT_HOST,port:MS_NDHM_CLIENT_PORT}},
      {name:'HIP_CONNECTOR',transport:Transport.KAFKA ,options:{client:{clientId:'HIP-CLIENT',
          brokers:KAFKA_BROKER_ADDRESSLIST.split(','), },consumer:{groupId:'HIP'} }  }
    ]),  
    HealthidServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {

}
