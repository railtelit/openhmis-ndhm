import { Body, Controller, Get, Inject, Param, Post, Req } from '@nestjs/common';
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

        @Post('mobile/login/resendOtp')
        async mobileLoginResendOtp(@Body() request ){
               //           
               // Expect : authMethod,txnId
               const {authMethod,txnId}=request
               const data = {authMethod,txnId}; 
                const payload={data,headers:{},domain:'HEALTHID'};
               return this.client.send({METHOD:'POST'},payload as PostDataInterface)
        }
        @Post('mobile/login/verifyOtp')
        async mobileLoginVerifyOtp(@Body() request ){
               //           
               // Expect : otp,txnId
               const data = {otp:request.otp,txnId:request.txnId}; 
                const payload={data,headers:{},domain:'HEALTHID'};
               return this.client.send({METHOD:'POST'},payload as PostDataInterface)
        }
        @Post('mobile/login/userAuthorizedToken')
        async userAuthorizedToken(@Body() request , @Req() req ){
               // Header : T-Token
               // Expect : healthId,txnId
               const headers={'T-Token':req.headers['T-Token']}
               const {healthId,txnId}=request
               const data = {healthId,txnId}; 
                const payload={data,headers,domain:'HEALTHID'};
               return this.client.send({METHOD:'POST'},payload as PostDataInterface)
        }
}
