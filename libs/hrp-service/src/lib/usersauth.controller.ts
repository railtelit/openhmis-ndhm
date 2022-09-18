import { Controller, Post } from '@nestjs/common';

@Controller('users/auth')
export class UsersAuthController {

        
    @Post('on-fetch-modes')
    async onFetchModes(){
            return {}
    }

    @Post('on-init')
    async onInit(){
            return {}
    }

    @Post('on-confirm')
    async onConfirm(){
            return {}
    }

    @Post('notify')
    async notify(){
        return {}
    }
}
