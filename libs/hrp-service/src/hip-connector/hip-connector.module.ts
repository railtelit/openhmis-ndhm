import { Module } from '@nestjs/common';
import { HipConnectorController } from './hip-connector.controller';
import { LinksController } from './links/links.controller';
import { HipService } from './hip.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

const KAFKA_BROKER_ADDRESSLIST = process.env.KAFKA_BROKER_ADDRESSLIST||`localhost:9092`
@Module({
  imports:[
      ClientsModule.register([
        {name:'HIP_CONNECTOR',transport:Transport.KAFKA ,
        options:{client:{clientId:'HIP-CLIENT',
        brokers:KAFKA_BROKER_ADDRESSLIST.split(','), },consumer:{groupId:'HIP'}, },  }
      ])
  ],
  controllers: [HipConnectorController, LinksController],
  providers: [HipService],
  exports:[ClientsModule]
})
export class HipConnectorModule {}
