export declare class CreateWeightDto {
    value: number;
    unit: string;
}
export declare class CreateDescriptionDto {
    title: string;
    description: string;
}
export declare class CreateVariationDto {
    name: string;
    price: number;
    discountPrice: number;
    active: boolean;
    quantity: number;
    weight: CreateWeightDto;
    shipping: any;
}
export declare class CreateProductDto {
    storeId: string;
    name: string;
    categoryIds: string[];
    images: string[];
    type: string;
    weight: CreateWeightDto;
    descriptions: CreateDescriptionDto[];
    variations: CreateVariationDto[];
    active: boolean;
    tax: number;
    global: boolean;
}
