import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PromotionRpcService } from './promotion.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('promotion')
export class PromotionController {

  constructor(private readonly promotionRpcService: PromotionRpcService) { }
  
  @Get()
  ping() {
    try {
      return this.promotionRpcService.sendRequest(MessagePatternEnum.PING, { test: 'promotion-test' });
    } catch (error) {
      console.log(error);
    }
  }

  
}
