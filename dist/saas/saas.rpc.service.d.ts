import { Observable } from 'rxjs';
export declare class SaasRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
