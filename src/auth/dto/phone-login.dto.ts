import { ApiProperty } from '@nestjs/swagger';

export class PhoneLoginAuthDto {
  @ApiProperty()
  phone: string;
}
