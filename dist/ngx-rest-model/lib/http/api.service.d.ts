import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ApiService {
    private baseUrl;
    private apiRoot;
    private http;
    constructor(http: HttpClient, config: any);
    setBaseUrl(url: string): void;
    getBaseUrl(): string;
    setApiRoot(url: string): void;
    getApiRoot(): string;
    private getUrl;
    get<T>(uri: any, options?: {}, bypassPrefix?: boolean): Observable<T>;
    post(uri: any, payload: any, bypassPrefix?: boolean, options?: {}): any;
    put(uri: any, payload: any, bypassPrefix?: boolean): Observable<Object>;
    delete(uri: any, options?: {}, bypassPrefix?: boolean): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiService>;
}
//# sourceMappingURL=api.service.d.ts.map