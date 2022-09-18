import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class AppService {

  constructor(@Inject('HIP_CONNECTOR') private hipConnector:ClientKafka){

  }

  getData(): { message: string } {
    return { message: 'Welcome to healthid!' };
  }

  
  async testkafka(){
       this.hipConnector.emit('hello', {msg:'Hello Kafka',number:1})
  }
}
