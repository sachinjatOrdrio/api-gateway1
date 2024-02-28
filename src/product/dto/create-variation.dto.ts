import { ApiProperty } from '@nestjs/swagger';

export class CreateVariationDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  size: string;

  @ApiProperty()
  style: string;

  @ApiProperty()
  material: string;

  @ApiProperty()
  images: [string];

  @ApiProperty()
  shipping: object;

  @ApiProperty()
  active: boolean;
}
