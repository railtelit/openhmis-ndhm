import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';
import { HipmanagerService } from './hipmanager/hipmanager.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private hipService:HipmanagerService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  /// this is kafka 

  @EventPattern('hello')
  async kafkahelloservice(@Payload() msg:any){
      //
      console.log(`Kafka Got Hello `,msg,typeof msg.number)
  }

  @EventPattern('care-contexts.discover')
  async  careContextDiscover(@Payload() request:any){
        //
        console.log(`Handling discovery`,request); 
        this.hipService.onCarecontextDiscover(request)
  }
}
