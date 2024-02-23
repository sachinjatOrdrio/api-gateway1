import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { ThemeRpcService } from './theme.rpc.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [ThemeController],
  providers: [ThemeRpcService, JwtService, AuthRpcService],
})
export class ThemeModule {}
