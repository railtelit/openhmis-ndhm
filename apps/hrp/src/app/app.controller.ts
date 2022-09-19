import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { API_VERSION } from './version';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('heartbeat')
  getHeartBeat() {
    console.log(`Hearbeat On`,(new Date()));
    return {
       timestamp:new Date(),
       status:"UP",
       version:API_VERSION
    };
  }
}
