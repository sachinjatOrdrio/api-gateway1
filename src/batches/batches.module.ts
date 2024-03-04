import { Module } from '@nestjs/common';
import { BatchRpcService } from './batches.service';
import { BatchesController } from './batches.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [BatchesController],
  providers: [BatchRpcService, JwtService, AuthRpcService],
})
export class BatchesModule {}
