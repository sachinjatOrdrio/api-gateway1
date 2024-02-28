import { ApiProperty } from '@nestjs/swagger';

export class UpdateMemberDto {
  @ApiProperty()
  @ApiProperty()
  storeId: string;

  @ApiProperty()
  uid: string;

  @ApiProperty()
  type: string;
}
