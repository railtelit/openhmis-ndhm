import { Module } from '@nestjs/common';
import { HiuConnectorController } from './hiu-connector.controller';
import { SubscriptionsController } from './subscriptions/subscriptions.controller';

@Module({
  controllers: [HiuConnectorController, SubscriptionsController],
})
export class HiuConnectorModule {}
