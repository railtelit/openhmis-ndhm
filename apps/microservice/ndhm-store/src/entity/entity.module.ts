import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestLogSchema } from './store.entity';

@Module({
    imports:[
        MongooseModule.forFeature([{name:'RequestLog',schema:RequestLogSchema}])
    ],
    exports:[MongooseModule]
})
export class EntityModule {}
