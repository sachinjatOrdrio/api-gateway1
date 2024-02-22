import { ApiProperty } from '@nestjs/swagger';

export class VerifyOtpDto {
  @ApiProperty()
  phone: string;

  @ApiProperty()
  otp: string;
}
