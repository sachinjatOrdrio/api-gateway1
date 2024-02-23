import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateSaaDto } from './dto/create-saa.dto';
import { UpdateSaaDto } from './dto/update-saa.dto';
import { SaasRpcService } from './saas.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('saas')
export class SaasController {
  constructor(private readonly saasRpcService: SaasRpcService) {}

  @Get()
  ping() {
    try {
      return this.saasRpcService.sendRequest(MessagePatternEnum.PING, {
        test: 'saas-test',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
