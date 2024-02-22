import { Observable } from 'rxjs';
export declare class OrderRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
