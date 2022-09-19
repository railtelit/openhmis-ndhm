import { Module } from '@nestjs/common';
import { HiuConnectorController } from './hiu-connector.controller';
import { SubscriptionsController } from './subscriptions/subscriptions.controller';
import { HiuService } from './hiu.service';

@Module({
  controllers: [HiuConnectorController, SubscriptionsController],
  providers: [HiuService],
})
export class HiuConnectorModule {}
