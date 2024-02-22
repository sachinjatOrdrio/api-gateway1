import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ResendEmailDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  redirectUrl: string;
}
