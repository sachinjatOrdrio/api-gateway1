import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRpcService } from './user.rpc.service';

@Module({
  controllers: [UserController],
  providers: [UserRpcService],
})
export class UserModule {}
