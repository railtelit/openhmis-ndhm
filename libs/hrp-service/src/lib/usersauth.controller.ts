import { Body, Controller, Post } from '@nestjs/common';

@Controller('users/auth')
export class UsersAuthController {

        
    @Post('on-fetch-modes')
    async onFetchModes(@Body() data){
                console.log(`On Fetch Modes `,data);
                return {}
        }
        
        @Post('on-init')
        async onInit(@Body() data:any){
            console.log(`Auth On On Fetch Modes `,data);
            return {}
        }
        
        @Post('on-confirm')
        async onConfirm(@Body() data:any){
            console.log(`Auth On ON-CONFIRM  `,data);
            return {}
    }

    @Post('notify')
    async notify(@Body() data:any){
        console.log(`/USER/AUTH/NOFIFY : `,data)
        return {}
    }
}
