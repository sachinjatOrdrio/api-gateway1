import { Observable } from 'rxjs';
export declare class CustomerRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
