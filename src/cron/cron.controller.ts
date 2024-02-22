import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCronDto } from './dto/create-cron.dto';
import { UpdateCronDto } from './dto/update-cron.dto';
import { CronRpcService } from './cron.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('cron')
export class CronController {

  constructor(private readonly CronRpcService: CronRpcService) { }
  
  @Get()
  ping() {
    try {
      return this.CronRpcService.sendRequest(MessagePatternEnum.PING, { test: 'cron-test' });
    } catch (error) {
      console.log(error);
    }
  }

 
}
