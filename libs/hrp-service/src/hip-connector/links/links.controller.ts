import { Body, Controller, Post, Req } from '@nestjs/common';
import { PostDataInterface } from '../../lib/data.interface';
import { HipService } from '../hip.service';

@Controller('links')
export class LinksController {
        constructor(private hipService:HipService){

        }
        log(req:{data:any,headers:any}){
                console.log( JSON.stringify(req) )
        }
        @Post('link/init')
        async linkInit(@Body() data,@Req() req){
                this.log({headers:req.headers,data})
                ///Check and Validate Request Later 
                const payload = {data,headers:{}} as PostDataInterface
                this.hipService.sendMessage('links.link.init', payload )
                return 
        }

        @Post('link/confirm')
        async linkConfirm(@Body() data,@Req() req){
                this.log({headers:req.headers,data})
                ///Check and Validate Request Later 
                const payload = {data,headers:req.headers } as PostDataInterface
                this.hipService.sendMessage('links.link.confirm', payload )
                return 
        }

        @Post('context/on-notify')
        async contextOnNotify(){
                // Purpose
                return  {}
        }

}
