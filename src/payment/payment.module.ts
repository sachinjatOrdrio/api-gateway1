import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentRpcService } from './payment.rpc.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentRpcService],
})
export class PaymentModule {}
