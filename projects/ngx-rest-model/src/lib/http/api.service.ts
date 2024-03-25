import {Inject, Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from "rxjs/operators";
import { CONFIG } from '../constants';

@Injectable()
export class ApiService {

    private baseUrl: string;
    private apiRoot: string;
    private http: HttpClient;

    constructor(http: HttpClient, @Inject(CONFIG) config) {
        this.http = http;
        const root = config.api_root;

        this.setBaseUrl(root);
        this.setApiRoot(root);
    }

    public setBaseUrl(url: string): void {
        this.baseUrl = url;
    }

    public getBaseUrl() {
        return this.baseUrl;
    }

    public setApiRoot(url: string): void {
        this.apiRoot = url;
    }

    public getApiRoot() {
        return this.apiRoot;
    }

    private getUrl(uri, bypassPrefix = false) {
        if( ! bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }

        return this.getApiRoot() + '/' + uri;
    }

    public get(uri, options = {}, bypassPrefix = false): any {
        let url = this.getUrl(uri, bypassPrefix);
        if(Object.keys(options).length !== 0) {
            return this.http.get(url, options).pipe(take(1));
        }

        return this.http.get(url).pipe(take(1));
    }

    public post(uri, payload, bypassPrefix = false, options = {}): any {

        let url = this.getUrl(uri, bypassPrefix);

        if(Object.keys(options).length !== 0) {
            return this.http.post(url, payload, options).pipe(take(1));
        }

        return this.http.post(url, payload).pipe(take(1));
    }

    public put(uri, payload, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);

        return this.http.put(url, payload).pipe(take(1));
    }

    public delete(uri, options = {}, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);

        return this.http.delete(url).pipe(take(1));
    }
}
