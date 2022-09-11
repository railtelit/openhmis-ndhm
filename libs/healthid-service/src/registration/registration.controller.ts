import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PostDataInterface } from '../lib/healthid-service.module';

@Controller('registration')
export class RegistrationController {
        constructor(@Inject('NDHM_CLIENT_SERVICE')private client:ClientProxy ){
                     //   
        }
       
        // Initiate Login Via Mobile OTP
        @Post('mobile/login/generateOtp')
        async mobileLoginGenerateOtp(@Body() request,@Param('version') version:string){
                console.log(version)
                //return mobileno;
                const data={mobile:request.mobile};
                const payload=  {domain:'HEALTHID',
                data,headers:{},
                context:`/${version}/registration/mobile/login/generateOtp`}
                //return payload ;
                return this.client.send( {METHOD:'POST'}, payload as PostDataInterface )
        }
}
