import { PostDataInterface } from '@ndhm/healthid-service';
import { DataInterface } from '@ndhm/interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class HipService {

             constructor(@Inject('HIP_CONNECTOR') private hipConnector:ClientKafka){
                    //
             }

             sendMessage(topic:string, request:DataInterface){
                 console.log(`Sending Message`, topic, JSON.stringify(request));
                 this.hipConnector.emit(topic,request)
             }

}
