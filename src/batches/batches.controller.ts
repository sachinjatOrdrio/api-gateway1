import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  Patch,
  Get,
  Query,
  Param,
} from '@nestjs/common';
import { BatchRpcService } from './batches.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { Response } from 'express';

@ApiTags('products/batches')
@Controller('batches')
export class BatchesController {
  constructor(private readonly batchesService: BatchRpcService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addBatch(
    @Body() createBatchDto: CreateBatchDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.batchesService
        .sendRequest(MessagePatternEnum.CREATE_BATCH, {
          createBatchDto,
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

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateBatch(
    @Body() updateBatchDto: UpdateBatchDto,
    @Req() req: any,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const user = req.user;
      const response = await this.batchesService
        .sendRequest(MessagePatternEnum.UPDATE_BATCH, {
          updateBatchDto,
          user,
          id,
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

  @Get()
  @ApiQuery({ name: 'productId', required: false })
  @ApiQuery({ name: 'storeId', required: false })
  @ApiQuery({ name: 'variationId', required: false })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getBatch(
    @Query('productId') productId: string,
    @Query('storeId') storeId: string,
    @Query('variationId') variationId: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.batchesService
        .sendRequest(MessagePatternEnum.GET_BATCH, {
          productId,
          storeId,
          variationId,
          user,
        })
        .toPromise();
      const status_code = response.status_code || 200;
      res.status(status_code).json(response);
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
}
