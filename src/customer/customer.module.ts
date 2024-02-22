import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerRpcService } from './customer.rpc.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerRpcService],
})
export class CustomerModule {}
