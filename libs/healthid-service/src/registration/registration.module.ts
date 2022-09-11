import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { RegistrationController } from './registration.controller';
const MS_NDHM_CLIENT_HOST = process.env.MS_NDHM_CLIENT_HOST||'127.0.0.1'
const MS_NDHM_CLIENT_PORT = process.env.MS_NDHM_CLIENT_PORT||3500
@Module({
  imports:[
    ClientsModule.register([{name:'NDHM_CLIENT_SERVICE',options:{host:MS_NDHM_CLIENT_HOST,port:MS_NDHM_CLIENT_PORT}}]),
  ],
  controllers: [RegistrationController],
})
export class RegistrationModule {}
