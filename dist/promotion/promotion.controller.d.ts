import { PromotionRpcService } from './promotion.rpc.service';
export declare class PromotionController {
    private readonly promotionRpcService;
    constructor(promotionRpcService: PromotionRpcService);
    ping(): import("rxjs").Observable<any>;
}
