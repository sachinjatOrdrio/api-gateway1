import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty()
  storeId: string;

  @ApiProperty()
  uid: string;

  @ApiProperty()
  type: string;
}
