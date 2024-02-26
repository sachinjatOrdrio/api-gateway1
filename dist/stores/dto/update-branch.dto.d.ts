export declare class CreateDeliveryChargeDto {
    type: string;
    charge: number;
    minAmount: number;
}
export declare class UpdateBranchDto {
    storeId: string;
    type: string;
    name: string;
    legal: string;
    email: string;
    countryCode: string;
    phone: string;
    payment: {
        type: string;
        account: string;
        ifsc: string;
        name: string;
        bank: string;
        branch: string;
    };
    createdBy: string;
    point: {
        type: string;
        coordinates: number[];
    };
    delivery: CreateDeliveryChargeDto;
    local: {
        lat: number;
        lng: number;
        address: string;
        radius: number;
    };
}
