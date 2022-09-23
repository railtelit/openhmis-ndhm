export interface PatientInterface {
    healthId:string,
    healthIdNumber:string,
    dayOfBirth?:string,
    monthOfBirth?:string,
    address?:PatientAddressInterface,
    indentifiers:IdentifierInterface[]
}

export interface PatientAddressInterface{
line:string,district:string,state:string,pincode?:string
}
export interface IdentifierInterface{
    type:string,value:string
};


export interface ProfileShareInterface{
        requestId:string,timestamp:string,
        profile:{hipCode:string,patient:PatientInterface}
}
