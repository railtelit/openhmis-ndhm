import { HealthidServiceModule } from '@ndhm/healthid-service';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const MS_NDHM_CLIENT_HOST = process.env.MS_NDHM_CLIENT_HOST||'127.0.0.1'
const MS_NDHM_CLIENT_PORT = process.env.MS_NDHM_CLIENT_PORT||3500

@Module({
  imports: [
    ClientsModule.register([{name:'NDHM_CLIENT_SERVICE',options:{host:MS_NDHM_CLIENT_HOST,port:MS_NDHM_CLIENT_PORT}}]),
    HealthidServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {

}
