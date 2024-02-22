import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRpcService } from './customer.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerRpcService) {}

  @Get()
ping() {
    try {
      return this.customerService.sendRequest(MessagePatternEnum.PING, { test: 'customer-test' });
    } catch (error) {
      console.log(error);
    }
  }  
}
