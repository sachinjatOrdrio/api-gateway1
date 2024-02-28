import { Controller, Post, Body, Res, UseGuards } from '@nestjs/common';
import { CategoriesRpcService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Response } from 'express';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
    @Res() res: Response,
  ): Promise<any> {
    try {
      const response = await this.categoriesService
        .sendRequest(MessagePatternEnum.CREATE_CATEGORIES, createCategoriesDto)
        .toPromise();
      console.log(response);
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

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateCategories(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const response = await this.categoriesService
        .sendRequest(MessagePatternEnum.UPDATE_CATEGORIES, updateCategoryDto)
        .toPromise();
      console.log(response);
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
}
