import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AccountModule } from '../account/account.module';
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
     
       RegistrationModule,AccountModule,
       RouterModule.register([
            {
                path:':version',module:RegistrationModule,
            },
            {
                path:':version',module:AccountModule,
            },
       ])
  ],
  controllers: [],
  providers: [],
 
})
export class HealthidServiceModule {}
 