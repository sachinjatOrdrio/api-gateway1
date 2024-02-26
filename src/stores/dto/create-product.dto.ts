import { ApiProperty } from '@nestjs/swagger';

export class CreateWeightDto {
    @ApiProperty()
    value: number;
    @ApiProperty()
    unit: string;
}

export class CreateDescriptionDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
}

export class CreateVariationDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    discountPrice: number;
    @ApiProperty()
    active: boolean;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    weight: CreateWeightDto;
    @ApiProperty()
    shipping: any;
}

export class CreateProductDto {

    @ApiProperty()
    storeId: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    categoryIds: string[];
    @ApiProperty()
    images: string[];
    @ApiProperty()
    type: string;
    @ApiProperty()
    weight: CreateWeightDto;
    @ApiProperty()
    descriptions: CreateDescriptionDto[];
    @ApiProperty()
    variations: CreateVariationDto[];
    @ApiProperty()
    active: boolean;
    @ApiProperty()
    tax: number;
    @ApiProperty()
    global: boolean;
    

    }
    

