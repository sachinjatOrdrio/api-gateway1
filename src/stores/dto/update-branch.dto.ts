import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';



export class CreateDeliveryChargeDto {
  @ApiProperty()
   type: string;
  @ApiProperty()
   charge: number;
  @ApiProperty()
   minAmount: number;
}

export class UpdateBranchDto {
  @ApiProperty()
   storeId: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  legal: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  countryCode: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  payment: { type: string; account: string; ifsc: string; name: string; bank: string; branch: string; };
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  point: { type: string; coordinates: number[] };
  @ApiProperty()
  delivery: CreateDeliveryChargeDto;
  @ApiProperty()
  local: { lat: number; lng: number; address: string; radius: number };
}
