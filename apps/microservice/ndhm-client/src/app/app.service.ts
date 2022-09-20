import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { catchError, map, of, tap } from 'rxjs';
import { DOMAINS, SESSION_URL } from './configuration';

export interface PostDataInterface{
  domain:string,
  context:string,
  data:any,
  headers:any
}
export interface GetDataInterface{
  domain:string,
  context:string,
  params:any,
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
      //   console.log(`CLIENTID : ${this.CLIENT_ID} , CS : ${this.CLIENT_SECRET}`)
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
           const timeout = setTimeout(()=>{
               this.refreshToken();
           },500*1000); // 500 Seconds to Refresh 
      },error(err) {
          console.error(err)
      },})
  }
  async refreshToken(){
      if(this.REFRESH_TOKEN){
          // Change Logic Later 
          this.loadSessionToken();
      }
  }
  
  testgetData(): { message: string } {
    return { message: 'Welcome to ndhm-client!' };
  }
 
  async postData(payload:PostDataInterface){
       const domain=payload.domain 
       const headers={ ...payload?.headers,
           'content-type':'application/json','Accept-Language':'en-US',
           'Authorization':`Bearer ${this.SESSION_TOKEN}`}; 
           // Set Rest EndPoint
           const ENDPOINT = `${DOMAINS[domain].URL}/${payload.context}`
           console.log(`Domaian : ${ENDPOINT} `,payload,headers)
       return this.http.post(ENDPOINT,payload.data||{},
              {headers}).pipe(
                  map(value=>value.data),
                  catchError((err)=> {
                      console.log('There is Error ', JSON.stringify(err.message))
                      console.log(ENDPOINT,payload.data,headers)
                        return of({error:'Error:'})
                  }  )                  
              )
  }
  async getData(payload:GetDataInterface){
       const domain=payload.domain 
       const headers={ ...payload?.headers,
           'content-type':'application/json','Accept-Language':'en-US',
           'Authorization':`Bearer ${this.SESSION_TOKEN}`}; 
           // Set Rest EndPoint

           const ENDPOINT = `${DOMAINS[domain].URL}/${payload.context}`
           console.log(`Domaian : ${ENDPOINT} `,payload,headers)
       return this.http.get(ENDPOINT,{params: payload.params||{},
                    headers },
              ).pipe(
                //   tap(r=>{
                //          console.log(r.headers,r.data)
                //   }),
                  map(value=>value.data),
                //   catchError((err)=> {
                //       console.log('There is Error ', Object.keys(err.message))
                //       console.log(ENDPOINT,payload.params,headers)
                //         return of({error:'Error: ' })
                //   }  )                  
              )
  }
  async getBinaryData(payload:GetDataInterface){
       const domain=payload.domain 
       const headers={ ...payload?.headers,
           'content-type':'application/json','Accept-Language':'en-US',
           'Authorization':`Bearer ${this.SESSION_TOKEN}`}; 
           // Set Rest EndPoint

           const ENDPOINT = `${DOMAINS[domain].URL}/${payload.context}`
           console.log(`Domaian : ${ENDPOINT} `,payload,headers)
       return this.http.get(ENDPOINT,{params: payload.params||{},
                    headers , responseType:'arraybuffer'},
              ).pipe(
              
                  map(value=>value.data),
                        
              )
  }
}
