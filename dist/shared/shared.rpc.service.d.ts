import { Observable } from 'rxjs';
export declare class SharedRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
