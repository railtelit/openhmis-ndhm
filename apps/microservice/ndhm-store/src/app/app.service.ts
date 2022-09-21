import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { RequestLog, RequestLogModel, RequestLogSchemaClass } from '../entity/store.entity';

@Injectable()
export class AppService {

  constructor(@InjectModel(RequestLog.name) private requestLog:RequestLogModel ){

  }

  getData(): { message: string } {
    return { message: 'Welcome to ndhm-store!' };
  }

  async getLogs(){
      console.log(`Getting Logs`)
      return   this.requestLog.find({})
  }

  async createLog(log:RequestLogSchemaClass){
      const newlog = new this.requestLog(log); 
      return newlog.save()
  }
}
