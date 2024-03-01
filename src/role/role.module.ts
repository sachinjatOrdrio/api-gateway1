import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RoleController } from './role.controller';
import { RoleRpcService } from './role.rpc.service';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [RoleController],
  providers: [RoleRpcService, JwtService, AuthRpcService],
})
export class RoleModule { }
