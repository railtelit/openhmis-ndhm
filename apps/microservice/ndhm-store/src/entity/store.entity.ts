import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  mongoose, { Document, Model } from "mongoose";


export type RequestLogModel=Model<RequestLogSchemaClass & Document>

@Schema({})
export class RequestLogSchemaClass{

        @Prop()
        logtime:Date

        @Prop()
        message:string
}

export const RequestLogSchema = SchemaFactory.createForClass(RequestLogSchemaClass); 

export  const RequestLog={
        name:`RequestLog`,
        schema: RequestLogSchema,
        model:Model<RequestLogSchemaClass & Document>,         
}

 