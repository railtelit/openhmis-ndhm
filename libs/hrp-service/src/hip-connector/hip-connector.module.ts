import {  Module } from '@nestjs/common';
import { HipConnectorController } from './hip-connector.controller';
import { LinksController } from './links/links.controller';

@Module({
  controllers: [HipConnectorController, LinksController],
})
export class HipConnectorModule {
 
}
