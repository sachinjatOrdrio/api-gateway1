import {
  Controller,
  Post,
  Body,
  Res,
  UseGuards,
  Patch,
  Param,
  Delete,
  Req,
  Get,
  Query,
} from '@nestjs/common';
import { CategoriesRpcService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Response } from 'express';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesRpcService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async createCategories(
    @Body() createCategoriesDto: CreateCategoriesDto,
    @Req() req: any,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const user = req.user;
      const response = await this.categoriesService
        .sendRequest(MessagePatternEnum.CREATE_CATEGORIES, {
          user,
          createCategoriesDto,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      console.log('AuthController', error);
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateCategories(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Req() req: any,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const user = req.user;
      const response = await this.categoriesService
        .sendRequest(MessagePatternEnum.UPDATE_CATEGORIES, {
          user,
          updateCategoryDto,
          id,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      console.log('AuthController', error);
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async deleteCategories(
    @Req() req: any,
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const user = req.user;
      const response = await this.categoriesService
        .sendRequest(MessagePatternEnum.DELETE_CATEGORIES, {
          user,
          id,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      console.log('AuthController', error);
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'storeId', required: true })
  async getCategory(
    @Query('storeId') storeId: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.categoriesService
        .sendRequest(MessagePatternEnum.LIST_CATEGORIES, {
          user,
          storeId,
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
