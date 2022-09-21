import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntityModule } from '../entity/entity.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const MONGODB_HOST=process.env.MONGODB_HOST||`192.168.1.26`

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${MONGODB_HOST}/ndhm`,{auth:{username:'admin',password:'admin'},authSource:'admin'}),
    EntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
