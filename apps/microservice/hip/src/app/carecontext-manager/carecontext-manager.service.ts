import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PostDataInterface } from '../ndhm-client.interface';
import {v4 as uuid }  from 'uuid'
import { tap } from 'rxjs';
@Injectable()
export class CarecontextManagerService {

        constructor(@Inject('NDHM_CLIENT_SERVICE') private ndhmClient:ClientProxy){
            //
        }   

         async onPatientLinkInit(payload:PostDataInterface){
                // 
                const requestId=uuid(); 
                const timestamp = new Date()
                const expireTime = timestamp.getTime()+( 1000 * 60 * 30 );
                const transactionId = payload.data?.transactionId; 

                
                const meta = { communicationMedium:'MOBILE',communicationHint:'APPROVE',
                communicationExpiry: new Date(expireTime)  }

                const link={ referenceNumber:uuid(),authenticationType:'DIRECT',meta }

                const data={requestId,timestamp,transactionId, 
                                     link,  resp:{requestId:payload.data?.requestId} }   ; 

                const responsePayload:PostDataInterface={
                        headers:{'x-cm-id':'sbx'},data,context:`v0.5/links/link/on-init`,domain:'GATEWAY'
                }
                this.ndhmClient.send({METHOD:'POST'},responsePayload).subscribe({
                    next:(response=>{
                            console.log('ON-INIT COMPLETED ', response)
                    }),
                    error:(err=>{
                            console.error('ERROR',JSON.stringify(err))
                    })
                })
         }

         async onPatientLinkConfirm(payload:PostDataInterface){
                // 
                const hipCode= payload.headers['x-hip-id'] || payload.headers['X-HIP-ID'] ; 
                
                const {confirmation:{linkRefNumber,token}}=payload.data || {confirmation:{}}
                const patient={ referenceNumber:'TEST-PAT-1', display:'TEST-PATIENT',careContexts:[
                    {referenceNumber:"CARE-ID-1",display:"TEST-ENCOUNTER"}
                ] }
                const data={
                                requestId:uuid(),timestamp:new Date(), patient,resp:{requestId:payload.data?.requestId}

                         }
                console.log(`Handle On Confirm`,hipCode,data);
                const headers={'x-cm-id':'sbx'}
                const responsePayload:PostDataInterface ={data,headers,context:`v0.5/links/link/on-confirm`,domain:'GATEWAY'}
                this.ndhmClient.send({METHOD:"POST"}, responsePayload ).subscribe({
                        next:response=>{
                                //
                                console.info(`On Confirm Complete `,response); 
                        },error:(err=>{
                                console.error(`ON-CONFIRM ERROR`, JSON.stringify(err))
                            //
                        })
                })
         }

}
