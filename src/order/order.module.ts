import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderRpcService } from './order.rpc.service';

@Module({
  controllers: [OrderController],
  providers: [OrderRpcService],
})
export class OrderModule {}
