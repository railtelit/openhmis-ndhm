import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HipmanagerService } from './hipmanager/hipmanager.service';
import { CarecontextManagerService } from './carecontext-manager/carecontext-manager.service';
import { ProfileManagerService } from './profile-manager/profile-manager.service';
import { ApplicationConfig, ClientConfig, DEFAULT_HOST, EnvironmentNames, ServiceNames } from '@ndhm/config';

const MS_NDHM_CLIENT_HOST = process.env.MS_NDHM_CLIENT_HOST || DEFAULT_HOST;
const MS_NDHM_CLIENT_PORT = process.env.MS_NDHM_CLIENT_PORT || ApplicationConfig.microservice.NDHM_CLIENT.PORT;
const PATIENT_STORE_HOST = process.env[EnvironmentNames.clientService.PATIENT_STORE.HOST]||ClientConfig.PATIENT_STORE.DEFAULT_HOST
const PATIENT_STORE_PORT = process.env[EnvironmentNames.clientService.PATIENT_STORE.PORT]||ClientConfig.PATIENT_STORE.DEFAULT_PORT
console.log(`Connecting Patient Store `,PATIENT_STORE_HOST,PATIENT_STORE_PORT)
@Module({
  imports: [
    ClientsModule.register([
      {
        
        name: ServiceNames.NDHM_CLIENT_SERVICE,
        options: { host: MS_NDHM_CLIENT_HOST, port: MS_NDHM_CLIENT_PORT,
              
           },
      },
      {        
        name:ServiceNames.PATIENT_STORE_SERVICE,options:{ host:PATIENT_STORE_HOST,port:PATIENT_STORE_PORT ,  }
      }
    ]),
    
  ],
  controllers: [AppController],
  providers: [
    AppService,
    HipmanagerService,
    CarecontextManagerService,
    ProfileManagerService,
  ],
})
export class AppModule {}
