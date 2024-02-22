import { Module } from '@nestjs/common';
import { CronController } from './cron.controller';
import { CronRpcService } from './cron.rpc.service';

@Module({
  controllers: [CronController],
  providers: [CronRpcService],
})
export class CronModule {}
