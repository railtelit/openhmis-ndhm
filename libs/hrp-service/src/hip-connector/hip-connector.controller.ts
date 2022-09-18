import { Controller, Headers, Post } from '@nestjs/common';

@Controller('')
export class HipConnectorController {


    @Post('patients/profile/share')
    async patientProfileShare(
      @Headers('Authorization') authToken: string,
      @Headers('X-HIP-ID') hipid: string
    ) {
      //
      return {};
    }
  
    @Post('care-contexts/discover')
    async careContextsDiscover() {
      return {};
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
