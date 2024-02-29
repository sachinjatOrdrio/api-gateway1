import { Module } from '@nestjs/common';
import { BranchesRpcService } from './branches.service';
import { BranchesController } from './branches.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [BranchesController],
  providers: [BranchesRpcService, JwtService, AuthRpcService],
})
export class BranchesModule {}
