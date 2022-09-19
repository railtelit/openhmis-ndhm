import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {v4 as uuid} from 'uuid'
import { PostDataInterface } from '../ndhm-client.interface';
@Injectable()
export class HipmanagerService {

        constructor(@Inject('NDHM_CLIENT_SERVICE') private ndhmClient:ClientProxy){
                //
        }


        async onCarecontextDiscover(request:any){
                const requestId = uuid(); 
                console.log(`Generate UUID `,requestId);
                const timeStamp = new Date(); 
                const patient = { referenceNumber:"TEST-PAT-1",display:request.patient?.id ||'Patient-Test' }
                const data={requestId,timeStamp,transactionId:request.transactionId,
                                careContexts:[
                                                 {referenceNumber:"CARE-ID-1",display:"TEST-ENCOUNTER"}
                                ],
                                patient,
                                matchedBy:["MR"],
                                resp:{requestId:request.requestId}
                          }
                const payload = { domain:'GATEWAY',context:`v0.5/care-contexts/on-discover`,data,headers:{'X-CM-ID':'sbx'} } as PostDataInterface
                this.ndhmClient.send ( {METHOD:'POST'},payload).subscribe({next:(response)=>{
                         //
                         console.log(`On-discover was Complete`,response)
                },error:(err)=>{
                         console.error(err)
                }})
        }

}
