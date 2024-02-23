import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentRpcService } from './payment.rpc.service';
import { get } from 'http';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentRpcService: PaymentRpcService) {}

  @Get()
  ping() {
    try {
      return this.paymentRpcService.sendRequest(MessagePatternEnum.PING, {
        test: 'payment-test',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
