import { PaymentRpcService } from './payment.rpc.service';
export declare class PaymentController {
    private readonly paymentRpcService;
    constructor(paymentRpcService: PaymentRpcService);
    ping(): import("rxjs").Observable<any>;
}
