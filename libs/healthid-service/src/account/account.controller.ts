import { Controller, Get, Headers, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('account')
export class AccountController {
    
    constructor(@Inject('NDHM_CLIENT_SERVICE')private client:ClientProxy){
            //
    }

    @Get('')
    async getProfile(@Headers('Authorization') userToken:string,
                    @Param('version') version:string){
            //Expect : Header Auth
             
             return {msg:'Profile Works'}
    }

}


