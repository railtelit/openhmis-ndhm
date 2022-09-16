import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetDataInterface } from '../lib/healthid-service.module';

@Controller('')
export class CommonController {
        constructor(@Inject('NDHM_CLIENT_SERVICE') private client:ClientProxy){
                //
        }
        @Get('ha/lgd/districts')
        async getDistricts(@Param('version') version:string,
            @Query('stateCode') stateCode:string  ) {
                const context=`${version}/ha/lgd/districts`; 
                const payload:GetDataInterface={context,headers:{},domain:'HEALTHID',params:{stateCode}}
                return this.client.send({METHOD:'GET'},payload)
        }
        @Get('ha/lgd/states')
        async getStates(@Param('version') version:string) {
                const context=`${version}/ha/lgd/states`; 
                const payload:GetDataInterface={context,headers:{},domain:'HEALTHID',params:{}}
                return this.client.send({METHOD:'GET'},payload)
        }

}
