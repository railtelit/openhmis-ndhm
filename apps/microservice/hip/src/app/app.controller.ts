import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';
import { CarecontextManagerService } from './carecontext-manager/carecontext-manager.service';
import { HipmanagerService } from './hipmanager/hipmanager.service';
import { PostDataInterface } from './ndhm-client.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private hipService:HipmanagerService,
      private careContextManager:CarecontextManagerService) {}

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

  
  @EventPattern('links.link.init')
  async  linkInit(@Payload() request:PostDataInterface){
        // When Patient Starts to Link Care-Context
        console.log(`Handling Link Init`,request); 
        this.careContextManager.onPatientLinkInit(request)
  }

  @EventPattern('links.link.confirm')
  async  linkConfirm(@Payload() request:PostDataInterface){
        // When Patient Confirms the Linking
        console.log(`Handling Link Confirm`,request); 
        this.careContextManager.onPatientLinkConfirm(request)
  }

}
