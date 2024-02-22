import { Module } from '@nestjs/common';
import { SaasController } from './saas.controller';
import { SaasRpcService } from './saas.rpc.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [SaasController],
  providers: [SaasRpcService,JwtService],
})
export class SaasModule {}
