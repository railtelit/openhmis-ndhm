import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService, PostDataInterface } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern({CONTEXT:'HEALTHID',PROCESSGROUP:'REGISTRATION'})
  async getSessionToken(){
        return  {token:'Test Token'};
  }

  @MessagePattern({METHOD:'POST'})
  async postData(payload:PostDataInterface){
      console.log('Calling Post Here'); 
      console.log(payload)
      return this.appService.postData(payload)
  }
}
