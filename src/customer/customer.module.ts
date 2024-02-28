import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerRpcService } from './customer.rpc.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerRpcService, JwtService, AuthRpcService],
})
export class CustomerModule {}
