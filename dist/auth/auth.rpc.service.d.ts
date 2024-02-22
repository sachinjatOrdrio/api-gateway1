import { Observable } from 'rxjs';
export declare class AuthRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
