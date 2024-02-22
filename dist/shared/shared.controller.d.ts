import { SharedRpcService } from './shared.rpc.service';
export declare class SharedController {
    private readonly sharedRpcService;
    constructor(sharedRpcService: SharedRpcService);
    ping(): import("rxjs").Observable<any>;
}
