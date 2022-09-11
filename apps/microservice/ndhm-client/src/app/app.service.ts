import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { catchError, map, tap } from 'rxjs';
import { DOMAINS, SESSION_URL } from './configuration';

export interface PostDataInterface{
  domain:string,
  context:string,
  data:any,
  headers:any
}


@Injectable()
export class AppService implements OnModuleInit{
  private CLIENT_ID = process.env.CLIENT_ID
  private  CLIENT_SECRET = process.env.CLIENT_SECRET
  constructor(private http:HttpService){
      ///
  }
  SESSION_TOKEN:string|null=null
  REFRESH_TOKEN:string|null=null
  
  /// NBDM APPLICATION CLIENT  

  onModuleInit() {
        // console.log(`CLIENTID : ${this.CLIENT_ID} , CS : ${this.CLIENT_SECRET}`)
        this.loadSessionToken();
  }
  async loadSessionToken(){
      // 

      this.http.post(SESSION_URL,{clientId:this.CLIENT_ID,clientSecret:this.CLIENT_SECRET},
        {headers:{ 'content-type':'application/json' }}).pipe(
          tap(console.log)
      ).subscribe({next:(value)=>{
           this.SESSION_TOKEN=value.data.accessToken
           this.REFRESH_TOKEN=value.data.refreshToken
      },error(err) {
          console.error(err)
      },})
  }
  
  getData(): { message: string } {
    return { message: 'Welcome to ndhm-client!' };
  }
 
  async postData(payload:PostDataInterface){
       const domain=payload.domain 
       const headers={ ...payload?.headers,
           'content-type':'application/json','Accept-Language':'en-US',
           'Authorization':`Bearer ${this.SESSION_TOKEN}`}; 
           // Set Rest EndPoint
           const ENDPOINT = `${DOMAINS[domain].URL}/${payload.context}`
           console.log(`Domaian : ${ENDPOINT} `,payload.data,headers)
       return this.http.post(ENDPOINT,payload.data||{},
              {headers}).pipe(
                  map(value=>value.data),
                  catchError((err)=>({...err}))                  
              )
  }
}
