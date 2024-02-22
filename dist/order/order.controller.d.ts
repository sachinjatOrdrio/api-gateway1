import { OrderRpcService } from './order.rpc.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderRpcService);
    ping(): import("rxjs").Observable<any>;
}
