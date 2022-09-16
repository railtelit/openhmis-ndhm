import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
 
import { PostDataInterface } from '../lib/healthid-service.module';

@Controller('search')
export class SearchController {
        constructor(@Inject('NDHM_CLIENT_SERVICE') private client:ClientProxy){
                //
        }


        @Post('existsByHealthId')
        async existsByHealthId(@Body() data:{healthId:string},@Param('version') version:string){
             const {healthId}=data; 
             const payload:PostDataInterface={context:`${version}/search/existsByHealthId`,
                                    data:{healthId},domain:'HEALTHID',headers:{}}
             return this.client.send({METHOD:'POST'},payload)
        }

}
