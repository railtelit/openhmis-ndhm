import { Module } from '@nestjs/common';
import { HealthidClientproxyModule } from '../healthid-clientproxy.module';
import { CommonController } from './common.controller';

@Module({
  imports:[HealthidClientproxyModule],
  controllers: [CommonController],
})
export class CommonModule {}
