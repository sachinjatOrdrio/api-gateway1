import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  storeId: String;

  @ApiProperty()
  name: String;

  @ApiProperty()
  phone: String;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: String;

  @ApiProperty()
  address: Object[];

  @ApiProperty()
  metaData: Object;

  @ApiProperty()
  fcmToken: String;

  @ApiProperty()
  deviceName: String;

  @ApiProperty()
  deviceId: String;

  @ApiProperty()
  channel: String;
}
