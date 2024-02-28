import { Module } from '@nestjs/common';
import { MemberRpcService } from './member.rpc.service';
import { MemberController } from './member.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [MemberController],
  providers: [MemberRpcService, JwtService, AuthRpcService],
})
export class MemberModule {}
