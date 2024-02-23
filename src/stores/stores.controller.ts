import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoresRpcService } from './stores.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Response } from 'express';

@ApiTags('stores')
@Controller('stores')
export class StoresController {

  constructor( private readonly storesRpcService:StoresRpcService) {}

  @Post()
  @ApiBearerAuth() 
  @UseGuards(AuthGuard)
  async create(@Body() createStoreDto: CreateStoreDto,@Req() req: any,@Res() res: Response,
  ){
    try {
      const response:any = await this.storesRpcService.sendRequest(MessagePatternEnum.CREATE_STORE, { createStoreDto, user: req.user }).toPromise();
      res.status(response.status_code).json({ ...response, status_code: undefined });
      return
    } catch (error) { 
      res.status(500).json({ message: error.message });
      return
    }
  }

  @Get()
  @ApiBearerAuth() 
  @UseGuards(AuthGuard)
  findAll() {
    try {
      return this.storesRpcService.sendRequest(MessagePatternEnum.GET_STORES, {});
    } catch (error) {
      console.log(error);
    }

  }

  @Get(':id')
  @ApiBearerAuth() 
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    try {
      return this.storesRpcService.sendRequest(MessagePatternEnum.GET_STORE, id);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch(':id')
  @ApiBearerAuth() 
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    try {
      return this.storesRpcService.sendRequest(MessagePatternEnum.UPDATE_STORE, {id, ...updateStoreDto});
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  @ApiBearerAuth() 
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    try {
      return this.storesRpcService.sendRequest(MessagePatternEnum.DELETE_STORE, id);
    } catch (error) {
      console.log(error);
    }
  }
}
