import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartRpcService } from './cart.rpc.service';

@Module({
  controllers: [CartController],
  providers: [CartRpcService],
})
export class CartModule {}
