import { Module } from '@nestjs/common';
import { RolesRpcService } from './roles.rpc.service';
import { RolesController } from './roles.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [RolesController],
  providers: [RolesRpcService, JwtService, AuthRpcService],
})
export class RolesModule {}
