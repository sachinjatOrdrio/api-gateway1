import { Observable } from 'rxjs';
export declare class ThemeRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
