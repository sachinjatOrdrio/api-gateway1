import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthRpcService } from './auth.rpc.service';

@Module({
  controllers: [AuthController],
  providers: [AuthRpcService],
})
export class AuthModule {}
