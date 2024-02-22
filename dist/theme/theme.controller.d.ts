import { ThemeRpcService } from './theme.rpc.service';
export declare class ThemeController {
    private readonly themeRpcService;
    constructor(themeRpcService: ThemeRpcService);
    ping(): import("rxjs").Observable<any>;
}
