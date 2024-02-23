import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  logo: string;

  @ApiProperty()
  businessName: string;

  @ApiProperty()
  businessType: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  timezone: string;

  @ApiProperty()
  payment: any;
}
