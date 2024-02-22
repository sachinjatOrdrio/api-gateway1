import { CronRpcService } from './cron.rpc.service';
export declare class CronController {
    private readonly CronRpcService;
    constructor(CronRpcService: CronRpcService);
    ping(): import("rxjs").Observable<any>;
}
