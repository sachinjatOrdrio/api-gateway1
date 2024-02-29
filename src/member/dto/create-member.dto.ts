// import { ApiProperty } from '@nestjs/swagger';

import { ApiProperty } from "@nestjs/swagger"

export class CreateMemberDto {
    @ApiProperty()
    storeId: string
    @ApiProperty()
    roleId: string
    @ApiProperty()
    branchId: string
    @ApiProperty()
    name: string
    @ApiProperty()
    email: string
    @ApiProperty()
    password: string
}
