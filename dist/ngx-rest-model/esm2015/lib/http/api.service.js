/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";
import { CONFIG } from '../constants';
export class ApiService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        /** @type {?} */
        const root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    /**
     * @return {?}
     */
    getBaseUrl() {
        return this.baseUrl;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setApiRoot(url) {
        this.apiRoot = url;
    }
    /**
     * @return {?}
     */
    getApiRoot() {
        return this.apiRoot;
    }
    /**
     * @private
     * @param {?} uri
     * @param {?=} bypassPrefix
     * @return {?}
     */
    getUrl(uri, bypassPrefix = false) {
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    }
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    get(uri, options = {}, bypassPrefix = false) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    }
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @param {?=} options
     * @return {?}
     */
    post(uri, payload, bypassPrefix = false, options = {}) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    }
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @return {?}
     */
    put(uri, payload, bypassPrefix = false) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    }
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    delete(uri, options = {}, bypassPrefix = false) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    }
}
ApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.apiRoot;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvIiwic291cmNlcyI6WyJsaWIvaHR0cC9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3RDLE1BQU0sT0FBTyxVQUFVOzs7OztJQU1uQixZQUFZLElBQWdCLEVBQWtCLE1BQU07UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O2NBQ1gsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1FBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxHQUFXO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxHQUFHLEtBQUs7UUFDcEMsSUFBSSxDQUFFLFlBQVksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBRU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxLQUFLOztZQUMxQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDO1FBQ3hDLElBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7O0lBRU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBWSxHQUFHLEtBQUssRUFBRSxPQUFPLEdBQUcsRUFBRTs7WUFDcEQsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQztRQUV4QyxJQUFHLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7Ozs7SUFFTSxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZLEdBQUcsS0FBSzs7WUFDckMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7OztJQUVNLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsS0FBSzs7WUFDN0MsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFwRUosVUFBVTs7OztZQUxGLFVBQVU7NENBWWdCLE1BQU0sU0FBQyxNQUFNOzs7Ozs7O0lBSjVDLDZCQUF3Qjs7Ozs7SUFDeEIsNkJBQXdCOzs7OztJQUN4QiwwQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIGFwaVJvb3Q6IHN0cmluZztcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KENPTkZJRykgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjb25maWcuYXBpX3Jvb3Q7XG5cbiAgICAgICAgdGhpcy5zZXRCYXNlVXJsKHJvb3QpO1xuICAgICAgICB0aGlzLnNldEFwaVJvb3Qocm9vdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJhc2VVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCYXNlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBcGlSb290KHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBpUm9vdCA9IHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXBpUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpUm9vdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCAhIGJ5cGFzc1ByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJy8nICsgdXJpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpUm9vdCgpICsgJy8nICsgdXJpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQodXJpLCBvcHRpb25zID0ge30sIGJ5cGFzc1ByZWZpeCA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcbiAgICAgICAgaWYob3B0aW9ucyAhPSB7fSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UsIG9wdGlvbnMgPSB7fSk6IGFueSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCk7XG5cbiAgICAgICAgaWYob3B0aW9ucyAhPSB7fSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCwgb3B0aW9ucykucGlwZSh0YWtlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dCh1cmksIHBheWxvYWQsIGJ5cGFzc1ByZWZpeCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBwYXlsb2FkKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUodXJpLCBvcHRpb25zID0ge30sIGJ5cGFzc1ByZWZpeCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKS5waXBlKHRha2UoMSkpO1xuICAgIH1cbn1cbiJdfQ==