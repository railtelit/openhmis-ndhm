import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }


  @Get('kafka')
  async testkafka(){
      //
      return this.appService.testkafka();
  }

  @Get('store')
  async testStore(){
      return this.appService.querylogs();
  }

  @Post('store')
  async postStore(@Body() data:any){
       return this.appService.createlog(data)
  }
}
