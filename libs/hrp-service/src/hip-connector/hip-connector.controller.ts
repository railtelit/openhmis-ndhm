import { Body, Controller, Headers, Post, Req } from '@nestjs/common';
import { HipService } from './hip.service';

@Controller('')
export class HipConnectorController {

    constructor(private hipService:HipService){

    }

    @Post('patients/profile/share')    
    async patientProfileShare(
      @Headers('Authorization') authToken: string,
      @Headers('X-HIP-ID') hipid: string,
      @Body() request
    ) {      
      console.log('On-Profile-Share',request)
      //
      //return {};
    }
  
    // Discover 
    @Post('care-contexts/discover')
    async careContextsDiscover(@Body() req,@Req() hreq) {

      console.log(hreq.headers)
      // deliver Message 
      // patnt Search and 
      this.hipService.sendMessage('care-contexts.discover', req )
      return ;
    }

    @Post('health-information/hip/request')
    async healthInfoHipRequest(){
        return {}
    }


    @Post('patients/sms/on-notify')
    async patientsSmsOnNotify(){
            return {}
    }
}
