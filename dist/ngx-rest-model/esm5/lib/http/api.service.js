/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";
import { CONFIG } from '../constants';
var ApiService = /** @class */ (function () {
    function ApiService(http, config) {
        this.http = http;
        /** @type {?} */
        var root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.setBaseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.baseUrl = url;
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getBaseUrl = /**
     * @return {?}
     */
    function () {
        return this.baseUrl;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.setApiRoot = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.apiRoot = url;
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getApiRoot = /**
     * @return {?}
     */
    function () {
        return this.apiRoot;
    };
    /**
     * @param {?} uri
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.getUrl = /**
     * @param {?} uri
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    };
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.get = /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    };
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @param {?=} options
     * @return {?}
     */
    ApiService.prototype.post = /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @param {?=} options
     * @return {?}
     */
    function (uri, payload, bypassPrefix, options) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    };
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.put = /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, payload, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    };
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.delete = /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    };
    ApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
    ]; };
    return ApiService;
}());
export { ApiService };
if (false) {
    /** @type {?} */
    ApiService.prototype.baseUrl;
    /** @type {?} */
    ApiService.prototype.apiRoot;
    /** @type {?} */
    ApiService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvIiwic291cmNlcyI6WyJsaWIvaHR0cC9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDOztJQVNsQyxvQkFBWSxJQUFnQixFQUFrQixNQUFNO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUNqQixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFFTSwrQkFBVTs7OztjQUFDLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7O0lBR2hCLCtCQUFVOzs7O1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztJQUdqQiwrQkFBVTs7OztjQUFDLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7O0lBR2hCLCtCQUFVOzs7O1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7SUFHaEIsMkJBQU07Ozs7O2NBQUMsR0FBRyxFQUFFLFlBQW9CO1FBQXBCLDZCQUFBLEVBQUEsb0JBQW9CO1FBQ3BDLEVBQUUsQ0FBQSxDQUFFLENBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDeEM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Ozs7Ozs7O0lBR2xDLHdCQUFHOzs7Ozs7Y0FBQyxHQUFHLEVBQUUsT0FBWSxFQUFFLFlBQW9CO1FBQWxDLHdCQUFBLEVBQUEsWUFBWTtRQUFFLDZCQUFBLEVBQUEsb0JBQW9COztRQUM5QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBR3JDLHlCQUFJOzs7Ozs7O2NBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFvQixFQUFFLE9BQVk7UUFBbEMsNkJBQUEsRUFBQSxvQkFBb0I7UUFBRSx3QkFBQSxFQUFBLFlBQVk7O1FBQ3hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXpDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O0lBRy9DLHdCQUFHOzs7Ozs7Y0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFlBQW9CO1FBQXBCLDZCQUFBLEVBQUEsb0JBQW9COztRQUN6QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7SUFHOUMsMkJBQU07Ozs7OztjQUFDLEdBQUcsRUFBRSxPQUFZLEVBQUUsWUFBb0I7UUFBbEMsd0JBQUEsRUFBQSxZQUFZO1FBQUUsNkJBQUEsRUFBQSxvQkFBb0I7O1FBQ2pELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztnQkFuRWxELFVBQVU7Ozs7Z0JBTEYsVUFBVTtnREFZZ0IsTUFBTSxTQUFDLE1BQU07O3FCQWRoRDs7U0FRYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGlSb290OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgQEluamVjdChDT05GSUcpIGNvbmZpZykge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICBjb25zdCByb290ID0gY29uZmlnLmFwaV9yb290O1xuXG4gICAgICAgIHRoaXMuc2V0QmFzZVVybChyb290KTtcbiAgICAgICAgdGhpcy5zZXRBcGlSb290KHJvb3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCYXNlVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QXBpUm9vdCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwaVJvb3QgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFwaVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaVJvb3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVcmwodXJpLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBpZiggISBieXBhc3NQcmVmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICcvJyArIHVyaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFwaVJvb3QoKSArICcvJyArIHVyaTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSk6IGFueSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCk7XG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgb3B0aW9ucykucGlwZSh0YWtlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdCh1cmksIHBheWxvYWQsIGJ5cGFzc1ByZWZpeCA9IGZhbHNlLCBvcHRpb25zID0ge30pOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHBheWxvYWQsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG59XG4iXX0=