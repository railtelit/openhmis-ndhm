import { Controller, Get, Header, Headers, Inject, Param, Req, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map, tap } from 'rxjs';
import { GetDataInterface, PostDataInterface } from '../lib/healthid-service.module';
import * as fs from 'fs'
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

    @Header('content-type','image/png')
    @Get('qrCode')
    async getQrcode(@Headers('X-Token') userToken:string,
                    @Param('version') version:string){
    
          
             const payload:GetDataInterface={context:`${version}/account/qrCode`,domain:'HEALTHID',headers:{"X-Token":userToken},params:{}}
        
              return this.client.send({METHOD:'GET_BINARY'},payload).pipe(
                        map((v)=>Buffer.from(v).toString('base64')),
                         
               )
       
    }

    @Get('profile')
    async mobileLoginVerifyOtp(@Headers('X-Token') xtoken,@Req() req, @Param('version') version:string ){
           //           
           // Expect : X-Token Header
           console.log(req.headers);
           console.log(xtoken)
           const params = {}; 
            const payload={params,headers:{"X-Token":xtoken},domain:'HEALTHID',context:`${version}/account/profile` };
           return await  this.client.send({METHOD:'GET'},payload as GetDataInterface ); 

    }
}


