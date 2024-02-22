import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { ThemeRpcService } from './theme.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('theme')
export class ThemeController {

  constructor(private readonly themeRpcService: ThemeRpcService) { }

  @Get()
  ping() {
    try {
      return this.themeRpcService.sendRequest(MessagePatternEnum.PING, { test: 'theme-test' });
    } catch (error) {
      console.log(error);
    }
  }


}
