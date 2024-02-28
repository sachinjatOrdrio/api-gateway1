import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiProperty()
  storeId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  access: any;
}
