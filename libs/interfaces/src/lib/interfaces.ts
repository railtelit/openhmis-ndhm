export interface DataInterface<T=any>{
  headers:any, data:T
}

export interface PostDataInterface<T=any> extends DataInterface<T>{
      context:string,domain:string
}

export  * from './patient.interface'

export * from './messagepattern.interface'