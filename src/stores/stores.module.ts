import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoresRpcService } from './stores.rpc.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [StoresController],
  providers: [StoresRpcService, JwtService, AuthRpcService],
})
export class StoresModule {}
