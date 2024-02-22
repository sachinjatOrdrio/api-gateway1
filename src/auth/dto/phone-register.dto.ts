import { ApiProperty } from '@nestjs/swagger';

export class PhoneRegisterDto {
  @ApiProperty()
  phone: string;
}
