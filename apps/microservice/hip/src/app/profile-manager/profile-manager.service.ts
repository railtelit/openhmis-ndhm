import { ServiceNames } from '@ndhm/config';
import { AppMessagePatterns, DataInterface, PostDataInterface, ProfileShareInterface } from '@ndhm/interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {v4 as uuid} from 'uuid'

@Injectable()
export class ProfileManagerService {

     constructor(@Inject(ServiceNames.NDHM_CLIENT_SERVICE) private ndhmClientService:ClientProxy,
            @Inject(ServiceNames.PATIENT_STORE_SERVICE) private patientStore:ClientProxy  ){
                //
     }

     async onPatientProfileShare(payload:PostDataInterface<ProfileShareInterface>){
            // 
            console.log(`onPatientProfileShare`,payload); 
            const patient =  payload.data.profile.patient; 
            const filterQuery:DataInterface={headers:payload.headers,data:{healthId:patient.healthId}}
            console.log(`Checking Patient Availibility`)
            const isAvailable= await  lastValueFrom<any[]>( this.patientStore.send(AppMessagePatterns.patients.filterPatient,filterQuery)).catch(err=>{
                    console.log(`Error In Getting Availibility`,err);
                    return []
            }); 
           console.log(`Available `,isAvailable);
            if(isAvailable.length==0){
                 // Create Patient :  
                 console.log(`Creating Patient `);;
                 const createOne = await lastValueFrom( this.patientStore.send(AppMessagePatterns.patients.createOne,{data:patient,headers:payload.headers})).catch(err=>{
                         console.error( 'ERROR', err)
                 })
                 console.log(createOne)
            }else{
               console.log(`Patient Exists `,isAvailable);
            }
            // notify on-share
            const confirmMessage={ requestId: uuid(),timestamp:new Date(),
                        acknowledgement:{ status:'SUCCESS',healthId:patient.healthId } ,
                        resp:{requestId:payload.data.requestId } }; 
          
            const notifyPayload:PostDataInterface={context:`v0.5/patients/profile/on-share`,
                         domain:'GATEWAY',
                       data:confirmMessage,headers:{'x-cm-id':'sbx','X-CM-ID':'sbx'} };
            console.log(`Confirm On-Share`,confirmMessage)
            this.ndhmClientService.send({METHOD:'POST'},notifyPayload).subscribe({
               next:(console.log),
               error:(err=>{
                    console.error(`Error Profile Share `,err)
               })
            })
     }
}
