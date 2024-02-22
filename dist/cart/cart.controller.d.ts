import { CartRpcService } from './cart.rpc.service';
export declare class CartController {
    private readonly cartRpcService;
    constructor(cartRpcService: CartRpcService);
    ping(): import("rxjs").Observable<any>;
}
