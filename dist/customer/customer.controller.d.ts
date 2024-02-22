import { CustomerRpcService } from './customer.rpc.service';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerRpcService);
    ping(): import("rxjs").Observable<any>;
}
