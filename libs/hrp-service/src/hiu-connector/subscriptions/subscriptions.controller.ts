import { Controller, Post } from '@nestjs/common';

@Controller('subscriptions')
export class SubscriptionsController {


    @Post('subscription-requests/hiu/on-init')
    async subRequestsHiuOnInit(){
            return {}
    }

    @Post('subscription-requests/hiu/notify')
    async subRequestsHiuNotify(){
            return {}
    }

    @Post('subscriptions/hiu/notify')
    async subHiuNotify(){
            return {}
    }



}
