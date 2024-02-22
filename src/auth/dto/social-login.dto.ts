import { ApiProperty } from '@nestjs/swagger';

export class SocialLoginDto {
  @ApiProperty()
  provider: string;
}
