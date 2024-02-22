import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { ThemeRpcService } from './theme.rpc.service';

@Module({
  controllers: [ThemeController],
  providers: [ThemeRpcService],
})
export class ThemeModule {}
