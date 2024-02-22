import { SaasRpcService } from './saas.rpc.service';
export declare class SaasController {
    private readonly saasRpcService;
    constructor(saasRpcService: SaasRpcService);
    ping(): import("rxjs").Observable<any>;
}
