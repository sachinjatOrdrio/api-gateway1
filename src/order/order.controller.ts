import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRpcService } from './order.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderRpcService) {}

  @Get()
  ping() {
    try {
      return this.orderService.sendRequest(MessagePatternEnum.PING, {
        test: 'order-test',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
