import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRpcService } from './user.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@Controller('user')
export class UserController {

  constructor(private readonly userRpcService: UserRpcService) { } 
  
  @Get()
  ping() {
    try {
      return this.userRpcService.sendRequest(MessagePatternEnum.PING, { test: 'USER-test' });
    } catch (error) {
      console.log(error);
    }
  }
 
}
