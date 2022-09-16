import { Module } from '@nestjs/common';
import { HealthidClientproxyModule } from '../healthid-clientproxy.module';
import { SearchController } from './search.controller';

@Module({
  imports:[HealthidClientproxyModule],
  controllers: [SearchController],
})
export class SearchModule {}
