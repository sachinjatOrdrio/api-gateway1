import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  storeId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty()
  address: Object[];

  @ApiProperty()
  metaData: Object;

  @ApiProperty()
  fcmToken: string;

  @ApiProperty()
  deviceName: string;

  @ApiProperty()
  deviceId: string;

  @ApiProperty()
  channel: string;
}
