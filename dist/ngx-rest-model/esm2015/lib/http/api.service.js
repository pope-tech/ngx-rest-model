/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    { type: Injectable },
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    ApiService.prototype.baseUrl;
    /** @type {?} */
    ApiService.prototype.apiRoot;
    /** @type {?} */
    ApiService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvIiwic291cmNlcyI6WyJsaWIvaHR0cC9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3RDLE1BQU07Ozs7O0lBTUYsWUFBWSxJQUFnQixFQUFrQixNQUFNO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUNqQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFFTSxVQUFVLENBQUMsR0FBVztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7SUFHaEIsVUFBVTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7Ozs7SUFHakIsVUFBVSxDQUFDLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7O0lBR2hCLFVBQVU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Ozs7OztJQUdoQixNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksR0FBRyxLQUFLO1FBQ3BDLEVBQUUsQ0FBQSxDQUFFLENBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDeEM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Ozs7Ozs7O0lBR2xDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsS0FBSzs7UUFDOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztJQUdyQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUFFLE9BQU8sR0FBRyxFQUFFOztRQUN4RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV6QyxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztJQUcvQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZLEdBQUcsS0FBSzs7UUFDekMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O0lBRzlDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsS0FBSzs7UUFDakQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztZQW5FbEQsVUFBVTs7OztZQUxGLFVBQVU7NENBWWdCLE1BQU0sU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGlSb290OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgQEluamVjdChDT05GSUcpIGNvbmZpZykge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICBjb25zdCByb290ID0gY29uZmlnLmFwaV9yb290O1xuXG4gICAgICAgIHRoaXMuc2V0QmFzZVVybChyb290KTtcbiAgICAgICAgdGhpcy5zZXRBcGlSb290KHJvb3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCYXNlVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QXBpUm9vdCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwaVJvb3QgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFwaVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaVJvb3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVcmwodXJpLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBpZiggISBieXBhc3NQcmVmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICcvJyArIHVyaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFwaVJvb3QoKSArICcvJyArIHVyaTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCk7XG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgb3B0aW9ucykucGlwZSh0YWtlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdCh1cmksIHBheWxvYWQsIGJ5cGFzc1ByZWZpeCA9IGZhbHNlLCBvcHRpb25zID0ge30pOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHBheWxvYWQsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG59XG4iXX0=