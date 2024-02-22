import { ApiProperty } from '@nestjs/swagger';

export class SocialAuthRegisterDto {
  @ApiProperty()
  provider: string;

  @ApiProperty()
  access_token: string;
}
