import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateDispatcherDto } from './dto/create-dispatcher.dto';
import { UpdateDispatcherDto } from './dto/update-dispatcher.dto';
import { DispatcherRpcService } from './dispatcher.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('dispatcher')
export class DispatcherController {
  constructor(private readonly dispatcherRpcService: DispatcherRpcService) {}

  @Get()
  ping() {
    try {
      return this.dispatcherRpcService.sendRequest(MessagePatternEnum.PING, {
        test: 'dispatcher-test',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
