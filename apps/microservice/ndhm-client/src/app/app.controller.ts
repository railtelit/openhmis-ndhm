import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService, PostDataInterface,GetDataInterface } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 

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
  @MessagePattern({METHOD:'GET'})
  async getData(payload:GetDataInterface){
      console.log('Calling GET Here'); 
      //console.log(payload)
      return this.appService.getData(payload)
  }
  @MessagePattern({METHOD:'GET_BINARY'})
  async getbinaryData(payload:GetDataInterface){
      console.log('Calling GET Binary Here'); 
      //console.log(payload)
      return this.appService.getBinaryData(payload)
  }
}
