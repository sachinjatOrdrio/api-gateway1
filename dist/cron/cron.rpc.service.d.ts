import { Observable } from 'rxjs';
export declare class CronRpcService {
    private client;
    constructor();
    sendRequest(pattern: string, data: any): Observable<any>;
}
