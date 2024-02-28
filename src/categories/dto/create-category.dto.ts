import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @ApiProperty()
  storeId: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  subCategoryId: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  index: DoubleRange;
}
