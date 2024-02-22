import { DispatcherRpcService } from './dispatcher.rpc.service';
export declare class DispatcherController {
    private readonly dispatcherRpcService;
    constructor(dispatcherRpcService: DispatcherRpcService);
    ping(): import("rxjs").Observable<any>;
}
