import { Observable } from 'rxjs';
export declare class PaymentRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
