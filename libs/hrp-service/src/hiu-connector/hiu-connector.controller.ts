import { Controller, Post } from '@nestjs/common';

@Controller('')
export class HiuConnectorController {

    constructor(){
            // 
    }

    @Post('health-information/hiu/on-request')
    async onHealthInfoHiuOnRequest(){
            return {}
    }


    @Post('health-information/transfer')
    async healthInfoTransfer(){
            return  {}
    }


    @Post('consent-requests/on-init')
    async consentRequestsOnInit(){
            return {}
    }
    @Post('consent-requests/on-status')
    async consentRequestsOnStatus(){
            return {}
    }

    
    @Post('consents/hiu/on-notify')
    async consentsHiuOnNotify(){
            return {}
    }


    
    @Post('patients/on-find')
    async patientsOnFind(){
            return {}
    }







}
