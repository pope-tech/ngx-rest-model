/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
     * @param {?} uri
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.getUrl = /**
     * @private
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
        { type: Injectable }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvIiwic291cmNlcyI6WyJsaWIvaHR0cC9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXRDO0lBT0ksb0JBQVksSUFBZ0IsRUFBa0IsTUFBTTtRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7WUFDWCxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVE7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU0sK0JBQVU7Ozs7SUFBakIsVUFBa0IsR0FBVztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0sK0JBQVU7OztJQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVNLCtCQUFVOzs7O0lBQWpCLFVBQWtCLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVNLCtCQUFVOzs7SUFBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVPLDJCQUFNOzs7Ozs7SUFBZCxVQUFlLEdBQUcsRUFBRSxZQUFvQjtRQUFwQiw2QkFBQSxFQUFBLG9CQUFvQjtRQUNwQyxJQUFJLENBQUUsWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDeEM7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFTSx3QkFBRzs7Ozs7O0lBQVYsVUFBVyxHQUFHLEVBQUUsT0FBWSxFQUFFLFlBQW9CO1FBQWxDLHdCQUFBLEVBQUEsWUFBWTtRQUFFLDZCQUFBLEVBQUEsb0JBQW9COztZQUMxQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDO1FBQ3hDLElBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7O0lBRU0seUJBQUk7Ozs7Ozs7SUFBWCxVQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBb0IsRUFBRSxPQUFZO1FBQWxDLDZCQUFBLEVBQUEsb0JBQW9CO1FBQUUsd0JBQUEsRUFBQSxZQUFZOztZQUNwRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDO1FBRXhDLElBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7OztJQUVNLHdCQUFHOzs7Ozs7SUFBVixVQUFXLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBb0I7UUFBcEIsNkJBQUEsRUFBQSxvQkFBb0I7O1lBQ3JDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7SUFFTSwyQkFBTTs7Ozs7O0lBQWIsVUFBYyxHQUFHLEVBQUUsT0FBWSxFQUFFLFlBQW9CO1FBQWxDLHdCQUFBLEVBQUEsWUFBWTtRQUFFLDZCQUFBLEVBQUEsb0JBQW9COztZQUM3QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDO1FBRXhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQXBFSixVQUFVOzs7O2dCQUxGLFVBQVU7Z0RBWWdCLE1BQU0sU0FBQyxNQUFNOztJQThEaEQsaUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQXBFWSxVQUFVOzs7Ozs7SUFFbkIsNkJBQXdCOzs7OztJQUN4Qiw2QkFBd0I7Ozs7O0lBQ3hCLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBpUm9vdDogc3RyaW5nO1xuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQ09ORklHKSBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvbmZpZy5hcGlfcm9vdDtcblxuICAgICAgICB0aGlzLnNldEJhc2VVcmwocm9vdCk7XG4gICAgICAgIHRoaXMuc2V0QXBpUm9vdChyb290KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFwaVJvb3QodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlSb290ID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcGlSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlSb290O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYoICEgYnlwYXNzUHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnLycgKyB1cmk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlSb290KCkgKyAnLycgKyB1cmk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSwgb3B0aW9ucyA9IHt9KTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIl19