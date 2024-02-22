import { Observable } from 'rxjs';
export declare class UserRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
