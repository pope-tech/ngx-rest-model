import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class ApiService {
    private baseUrl;
    private apiRoot;
    private http;
    constructor(http: HttpClient, config: any);
    setBaseUrl(url: string): void;
    getBaseUrl(): string;
    setApiRoot(url: string): void;
    getApiRoot(): string;
    private getUrl(uri, bypassPrefix?);
    get(uri: any, options?: {}, bypassPrefix?: boolean): any;
    post(uri: any, payload: any, bypassPrefix?: boolean, options?: {}): any;
    put(uri: any, payload: any, bypassPrefix?: boolean): Observable<Object>;
    delete(uri: any, options?: {}, bypassPrefix?: boolean): Observable<Object>;
}
