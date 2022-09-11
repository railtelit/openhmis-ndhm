import { HttpModule } from '@nestjs/axios';
import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule    {

    constructor(){
         // 
    }
    
  
}
