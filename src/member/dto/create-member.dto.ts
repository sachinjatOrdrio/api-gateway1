// import { ApiProperty } from '@nestjs/swagger';

import { ApiProperty } from '@nestjs/swagger';
import { IsStrongPassword } from 'class-validator';

export class CreateMemberDto {
  @ApiProperty()
  storeId: string;
  @ApiProperty()
  roleId: string;
  @ApiProperty()
  branchId: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  @IsStrongPassword({
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minLength: 8,
  })
  password: string;
}
