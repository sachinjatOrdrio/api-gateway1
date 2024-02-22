import { UserRpcService } from './user.rpc.service';
export declare class UserController {
    private readonly userRpcService;
    constructor(userRpcService: UserRpcService);
    ping(): import("rxjs").Observable<any>;
}
