import { Module } from '@nestjs/common';
import { DispatcherController } from './dispatcher.controller';
import { DispatcherRpcService } from './dispatcher.rpc.service';

@Module({
  controllers: [DispatcherController],
  providers: [DispatcherRpcService],
})
export class DispatcherModule {}
