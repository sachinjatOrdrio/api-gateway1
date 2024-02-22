import { Observable } from 'rxjs';
export declare class PromotionRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
