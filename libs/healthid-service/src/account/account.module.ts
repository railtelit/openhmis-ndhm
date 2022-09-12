import { Module } from '@nestjs/common';
import { HealthidClientproxyModule } from '../healthid-clientproxy.module';
import { AccountController } from './account.controller';

@Module({
  
  imports:[HealthidClientproxyModule],
  controllers: [AccountController],
})
export class AccountModule {}
