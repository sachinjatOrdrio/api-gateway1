import { Observable } from 'rxjs';
export declare class DispatcherRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
