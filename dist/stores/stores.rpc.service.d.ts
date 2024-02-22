import { Observable } from 'rxjs';
export declare class StoresRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
