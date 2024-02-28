import { PartialType } from '@nestjs/swagger';
import { CreateCategoriesDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoriesDto) {}
