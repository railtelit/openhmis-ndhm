import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { catchError, of } from 'rxjs';

@Injectable()
export class AppService {

  constructor(@Inject('HIP_CONNECTOR') private hipConnector:ClientKafka,
     @Inject('NDHM_STORE_SERVICE') private ndhmStore:ClientProxy  ){

  }

  getData(): { message: string } {
    return { message: 'Welcome to healthid!' };
  }

  
  async testkafka(){
       this.hipConnector.emit('hello', {msg:'Hello Kafka',number:1}).pipe(
           catchError((err:any)=>{
                console.log(`Error in Sending Kafka Event `, JSON.stringify(err))
                return  of(err)
           })    
       ); 
       
  }

  async querylogs(){
      return  this.ndhmStore.send({QUERY:'RequestLog'},{})
  }

  async createlog(data:any){
      return  this.ndhmStore.send({CREATE:'RequestLog'},{...data,logtime:new Date()})
  }

}
