import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { ProductsRpcService } from './product.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Response } from 'express';
import { CreateVariationDto } from './dto/create-variation.dto';
import { UpdateProductDto } from './dto/update-variation.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateBatchDto } from './dto/create-batch.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsRpcService) {}

  @ApiTags('stores/products')
  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addProduct(
    @Body() createProductDto: CreateProductDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.CREATE_PRODUCT, {
          createProductDto,
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

  @ApiTags('stores/products')
  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.UPDATE_PRODUCT, {
          id,
          updateProductDto,
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

  @ApiTags('stores/products')
  @Get()
  @ApiBearerAuth()
  @ApiQuery({ name: 'storeId', required: true })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'searchKey', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({ name: 'descending', required: false })
  @UseGuards(AuthGuard)
  async getProducts(
    @Req() req: any,
    @Res() res: Response,
    @Query('storeId') storeId: string,
    @Query('page') page: string,
    @Query('limit') limit: number,
    @Query('orderBy') orderBy: string,
    @Query('searchKey') searchKey: string,
    @Query('descending') descending: string,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.GET_PRODUCTS, {
          user,
          storeId,
          limit: limit || 10,
          page,
          orderBy,
          searchKey,
          descending,
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

  @ApiTags('stores/products')
  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async removeProduct(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.DELETE_PRODUCT, { id, user })
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

  @ApiTags('/products/variations')
  @Post('/:id/variations')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async createVariation(
    @Body() createVariationDto: CreateVariationDto,
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.CREATE_PRODUCT_VARIATION, {
          createVariationDto,
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

  @ApiTags('/products/variations')
  @Delete('/:productId/variations/:variationID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async deleteVariation(
    @Param('productId') productId: string,
    @Param('variationID') variationID: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.DELETE_PRODUCT_VARIATION, {
          user,
          productId,
          variationID,
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

  @ApiTags('/products/variations')
  @Patch('/:productId/variations/:variationID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateVariation(
    @Body() updateVariationDto: UpdateProductDto,
    @Param('productId') productId: string,
    @Param('variationID') variationID: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.UPDATE_PRODUCT_VARIATION, {
          updateVariationDto,
          user,
          productId,
          variationID,
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

  @ApiTags('/products/variations')
  @Get('/:productId/variations/:variationID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getVariation(
    @Param('productId') productId: string,
    @Param('variationID') variationID: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.GET_PRODUCT_VARIATION, {
          user,
          productId,
          variationID,
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

  @ApiTags('/products/variations')
  @Get('/:productId/variations')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  // @ApiQuery({ name: 'storeId', required: true })
  // @ApiQuery({ name: 'page', required: false })
  // @ApiQuery({ name: 'limit', required: false })
  // @ApiQuery({ name: 'orderBy', required: false })
  // @ApiQuery({ name: 'searchKey', required: false })
  async getAllVariation(
    @Param('productId') productId: string,
    @Req() req: any,
    @Res() res: Response,
    // @Query('storeId') storeId: string,
    // @Query('page') page: string,
    // @Query('searchKey') searchKey: string,
    // @Query('orderBy') orderBy: string,
    // @Query('limit') limit: number,
  ) {
    try {
      const user = req.user;
      const response = await this.productService
        .sendRequest(MessagePatternEnum.GETALL_PRODUCT_VARIATION, {
          user,
          productId,
          // storeId,
          // limit: limit || 10,
          // page,
          // orderBy,
          // searchKey,
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
}
