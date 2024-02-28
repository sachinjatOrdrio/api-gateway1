import { Module } from '@nestjs/common';
import { ProductsRpcService } from './product.service';
import { ProductController } from './product.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthRpcService } from 'src/auth/auth.rpc.service';

@Module({
  controllers: [ProductController],
  providers: [ProductsRpcService, JwtService, AuthRpcService],
})
export class ProductModule {}
