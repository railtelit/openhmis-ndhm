import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HipConnectorModule } from '../hip-connector/hip-connector.module';
import { HiuConnectorModule } from '../hiu-connector/hiu-connector.module';
import { UsersAuthController } from './usersauth.controller';

@Module({
  imports: [HiuConnectorModule, HipConnectorModule],
  controllers: [UsersAuthController],
  providers: [],
  exports: [],
})
export class HrpServiceModule {}
