import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

const MS_NDHM_CLIENT_HOST = process.env.MS_NDHM_CLIENT_HOST||'127.0.0.1'
const MS_NDHM_CLIENT_PORT = process.env.MS_NDHM_CLIENT_PORT||3500
@Module({
    imports:[
        ClientsModule.register([{name:'NDHM_CLIENT_SERVICE',options:{host:MS_NDHM_CLIENT_HOST,port:MS_NDHM_CLIENT_PORT}}]),
    ],
    exports:[ClientsModule]
})
export class HealthidClientproxyModule {

}
