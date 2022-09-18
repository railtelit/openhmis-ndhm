import { Controller, Post } from '@nestjs/common';

@Controller('links')
export class LinksController {


        @Post('link/init')
        async linkInit(){
                return {}
        }

        @Post('link/confirm')
        async linkConfirm(){
                return {}
        }

        @Post('context/on-notify')
        async contextOnNotify(){
                return  {}
        }

}
