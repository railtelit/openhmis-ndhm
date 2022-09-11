import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { RegistrationController } from '../registration/registration.controller';
import { RegistrationModule } from '../registration/registration.module';

export interface PostDataInterface{
     domain:string,
     context:string,
     data:any,
     headers:any
   }

   
@Module({
  imports:[
       RegistrationModule,
       RouterModule.register([
            {
                path:':version',module:RegistrationModule,
            },
       ])
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class HealthidServiceModule {}
 