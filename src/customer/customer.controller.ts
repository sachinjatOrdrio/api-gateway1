import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CustomerRpcService } from './customer.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Response } from 'express';

@ApiTags('stores/customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerRpcService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addCustomer(
    @Body() createCustomerDto: CreateCustomerDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.customerService
        .sendRequest(MessagePatternEnum.CREATE_CUSTOMER, {
          createCustomerDto,
          user,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getCustomer(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.customerService
        .sendRequest(MessagePatternEnum.GET_CUSTOMER, { id, user })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'storeId', required: true })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({ name: 'searchKey', required: false })
  async getAllCustomer(
    // @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
    @Query('storeId') storeId: string,
    @Query('page') cursor: string,
    @Query('searchKey') searchKey: string,
    @Query('orderBy') orderBy: string,
    @Query('limit') limit: number,
  ) {
    try {
      const user = req.user;
      const response = await this.customerService
        .sendRequest(MessagePatternEnum.GET_CUSTOMERS, {
          user,
          storeId,
          limit: limit || 10,
          cursor,
          orderBy,
          searchKey,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateCustomer(
    @Param('id') id: string,
    @Body() updateCustomerDto: CreateCustomerDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.customerService
        .sendRequest(MessagePatternEnum.UPDATE_CUSTOMER, {
          id,
          updateCustomerDto,
          user,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async removeCustomer(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.customerService
        .sendRequest(MessagePatternEnum.DELETE_CUSTOMER, { id, user })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
}
