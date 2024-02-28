import { Module } from '@nestjs/common';
import { CategoriesRpcService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { AuthRpcService } from 'src/auth/auth.rpc.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesRpcService, JwtService, AuthRpcService],
})
export class CategoriesModule {}
