import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RequestLog, RequestLogModel, RequestLogSchemaClass } from '../entity/store.entity';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern({QUERY:'RequestLog'})
  async  getLogs(){
       return    this.appService.getLogs();
  }

  @MessagePattern({CREATE:'RequestLog'})
  async  createLog(payload:RequestLogSchemaClass){

       return    this.appService.createLog(payload);
  }


}
