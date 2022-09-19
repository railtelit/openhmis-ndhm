import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class HipService {

             constructor(@Inject('HIP_CONNECTOR') private hipConnector:ClientKafka){
                    //
             }

             sendMessage(topic:string, request:any){
                 console.log(`Sending Message`, topic, request);
                 this.hipConnector.emit(topic,{request})
             }

}
