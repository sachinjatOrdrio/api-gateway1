import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateSharedDto } from './dto/create-shared.dto';
import { UpdateSharedDto } from './dto/update-shared.dto';
import { SharedRpcService } from './shared.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('shared')
export class SharedController {
  constructor(private readonly sharedRpcService: SharedRpcService) {}

  @Get()
  ping() {
    try {
      return this.sharedRpcService.sendRequest(MessagePatternEnum.PING, {
        test: 'shared-test',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
