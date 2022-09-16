import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AccountModule } from '../account/account.module';
import { CommonModule } from '../common/common.module';
import { RegistrationController } from '../registration/registration.controller';
import { RegistrationModule } from '../registration/registration.module';
import { SearchModule } from '../search/search.module';



export interface PostDataInterface{
     domain:string,
     context:string,
     data:any,
     headers:any
   }

export interface GetDataInterface{
     domain:string,
     context:string,
     params:any,
     headers:any
   }
   
   
@Module({
  imports:[
      
       RegistrationModule,AccountModule,CommonModule,SearchModule,
       RouterModule.register([
            {
                path:':version',module:RegistrationModule,
            },
            {
                path:':version',module:AccountModule,
            },
            {
                path:':version',module:SearchModule,
            },
            {
                path:':version',module:CommonModule,
            },
       ])
  ],
  controllers: [],
  providers: [],
 
})
export class HealthidServiceModule {}
 