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
        async mobileLoginResendOtp(@Body() request,@Param('version') version:string ){
               //           
               // Expect : authMethod,txnId
               const {authMethod,txnId}=request
               const data = {authMethod,txnId}; 
               
                const payload={data,headers:{},domain:'HEALTHID',  context:`/${version}/registration/mobile/login/resendOtp` };
               return this.client.send({METHOD:'POST'},payload as PostDataInterface)
        }
        @Post('mobile/login/verifyOtp')
        async mobileLoginVerifyOtp(@Body() request,@Param('version') version:string ){
               //           
               // Expect : otp,txnId
               const data = {otp:request.otp,txnId:request.txnId}; 
                const payload={data,headers:{},domain:'HEALTHID',context:`/${version}/registration/mobile/login/verifyOtp` };
               return this.client.send({METHOD:'POST'},payload as PostDataInterface)
        }
        @Post('mobile/login/userAuthorizedToken')
        async userAuthorizedToken(@Body() request , @Req() req ,@Param('version') version:string ){
               // Header : T-Token
               // Expect : healthId,txnId
               console.log(req.headers)
               const headers={'T-Token':`Bearer ${req.headers['t-token']}`}
               const {healthId,txnId}=request
               const data = {healthId,txnId}; 
                const payload={data,headers,domain:'HEALTHID',context:`/${version}/registration/mobile/login/userAuthorizedToken`  };
                //return {}
               return this.client.send({METHOD:'POST'},payload as PostDataInterface)
        }

       //  ADHAAR REGISTRATION
       @Post('aadhaar/generateOtp')
       async generateOTP( @Body() data:{aadhaar:string},@Param('version') version:string){
              //V1
              const {aadhaar}=data; 
              const payload:PostDataInterface={data,context:`${version}/registration/aadhaar/generateOtp`
                            ,headers:{},domain:'HEALTHID'}
              return this.client.send({METHOD:'POST'},payload)
       }
       @Post('aadhaar/verifyOTP')
       async verifyOTP( @Body() data:{otp:string,txnId},@Param('version') version:string){
              //V1
              const {otp,txnId}=data; 
              const payload:PostDataInterface={data:{otp,txnId},
                     context:`${version}/registration/aadhaar/verifyOTP`,headers:{},domain:'HEALTHID'}
              return this.client.send({METHOD:'POST'},payload)
       }
       @Post('aadhaar/generateMobileOTP')
       async generateMobileOTP( @Body() data:{mobile:string,txnId:string},@Param('version') version:string){
              //V1
              const {mobile,txnId}=data; 
              const payload:PostDataInterface={data:{mobile,txnId},
                     context:`${version}/registration/aadhaar/generateMobileOTP`,headers:{},domain:'HEALTHID'}
              return this.client.send({METHOD:'POST'},payload)
       }
       @Post('aadhaar/verifyMobileOTP')
       async verifyMobileOTP( @Body() data:{otp:string,txnId:string},@Param('version') version:string){
              //V1
              const {otp,txnId}=data; 
              const payload:PostDataInterface={data:{otp,txnId},
                     context:`${version}/registration/aadhaar/verifyMobileOTP`,headers:{},domain:'HEALTHID'}
              return this.client.send({METHOD:'POST'},payload)
       }
       @Post('aadhaar/createHealthIdWithPreVerified')
       async createHealthIdWithPreVerified( @Body() data:CreateAadhaarDTO,@Param('version') version:string){
              //V1              
              const payload:PostDataInterface={data,
                     context:`${version}/registration/aadhaar/createHealthIdWithPreVerified`,
                            headers:{},domain:'HEALTHID'}
              return this.client.send({METHOD:'POST'},payload)
       }
}


interface CreateAadhaarDTO{
       txnId:string,
       address:string, 
       dayOfBirth:string,
       healthId:string,
       password:string,
       restrictions:string,
       gender:string,
       stateCode:string,
       districtCode:string,
       email:string
}