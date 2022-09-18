import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
}
