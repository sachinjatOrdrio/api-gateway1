import { Module } from '@nestjs/common';
import { SharedController } from './shared.controller';
import { SharedRpcService } from './shared.rpc.service';

@Module({
  controllers: [SharedController],
  providers: [SharedRpcService],
})
export class SharedModule {}
