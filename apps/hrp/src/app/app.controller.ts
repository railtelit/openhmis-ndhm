import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { API_VERSION } from './version';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('heartbeat')
  getHeartBeat() {
    return {
       timestamp:new Date(),
       status:"UP",
       version:API_VERSION
    };
  }
}
