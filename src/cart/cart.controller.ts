import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartRpcService } from './cart.rpc.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartRpcService: CartRpcService) {}

  @Get()
  ping() {
    try {
      return this.cartRpcService.sendRequest('ping', { test: 'cart-test' });
    } catch (error) {
      console.log(error);
    }
  }
}
