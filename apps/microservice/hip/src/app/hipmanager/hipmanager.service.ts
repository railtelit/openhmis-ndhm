import { ServiceNames } from '@ndhm/config';
import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { retry, timeout } from 'rxjs';
import {v4 as uuid} from 'uuid'
import { PostDataInterface } from '../ndhm-client.interface';
@Injectable()
export class HipmanagerService implements OnApplicationBootstrap {

        constructor(@Inject(ServiceNames.NDHM_CLIENT_SERVICE) private ndhmClient:ClientProxy){
                //
        }

        async onApplicationBootstrap() {
        //      await this.ndhmClient.connect().catch(err=>{
        //          console.error(`Unable to Connect Ndhm Client `, err)
        //      }).then(r=>{
        //              console.log(`HIP->NDHMCLIENT:READY`)
        //      })
        }




        async onCarecontextDiscover(request:any){
                const requestId = uuid(); 
                console.log(`Generate UUID `,requestId);
                const timestamp = new Date(); 
                const patient = {
                         referenceNumber:"TEST-PAT-1",display:request.patient?.id ||'TEST-PATIENT',
                                matchedBy:["MR"],
                                careContexts:[
                                                 {referenceNumber:"CARE-ID-1",display:"TEST-ENCOUNTER"}
                                ],
                         }
                const data={ 
                                requestId,timestamp,transactionId:request.transactionId,
                                patient,
                                
                                resp:{requestId:request.requestId}
                          }
                const payload = { domain:'GATEWAY',context:`v0.5/care-contexts/on-discover`,
                        data,headers:{'X-CM-ID':'sbx','x-cm-id':'sbx'} } as PostDataInterface; 
                //await this.ndhmClient.connect();
                
                this.ndhmClient.send ( {METHOD:'POST'},payload).pipe(timeout(4000),retry(1),)
                .subscribe({next:(response)=>{
                         //
                         console.log(`On-discover was Complete .. `,response)
                },error:(err)=>{
                         
                         console.error(`MicroserviceClient ERR `, err)
                }})
        }



        

}
