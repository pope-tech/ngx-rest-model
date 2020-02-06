import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";
import { CONFIG } from '../constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ApiService = /** @class */ (function () {
    function ApiService(http, config) {
        this.http = http;
        var root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    ApiService.prototype.setBaseUrl = function (url) {
        this.baseUrl = url;
    };
    ApiService.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    ApiService.prototype.setApiRoot = function (url) {
        this.apiRoot = url;
    };
    ApiService.prototype.getApiRoot = function () {
        return this.apiRoot;
    };
    ApiService.prototype.getUrl = function (uri, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    };
    ApiService.prototype.get = function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    };
    ApiService.prototype.post = function (uri, payload, bypassPrefix, options) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (options === void 0) { options = {}; }
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    };
    ApiService.prototype.put = function (uri, payload, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    };
    ApiService.prototype.delete = function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    };
    ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(CONFIG)); };
    ApiService.ɵprov = i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac });
    return ApiService;
}());
export { ApiService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: [CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvIiwic291cmNlcyI6WyJsaWIvaHR0cC9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUV0QztJQU9JLG9CQUFZLElBQWdCLEVBQWtCLE1BQU07UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUU3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSwrQkFBVSxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwrQkFBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU8sMkJBQU0sR0FBZCxVQUFlLEdBQUcsRUFBRSxZQUFvQjtRQUFwQiw2QkFBQSxFQUFBLG9CQUFvQjtRQUNwQyxJQUFJLENBQUUsWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDeEM7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFFTSx3QkFBRyxHQUFWLFVBQVcsR0FBRyxFQUFFLE9BQVksRUFBRSxZQUFvQjtRQUFsQyx3QkFBQSxFQUFBLFlBQVk7UUFBRSw2QkFBQSxFQUFBLG9CQUFvQjtRQUM5QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFHLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUJBQUksR0FBWCxVQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBb0IsRUFBRSxPQUFZO1FBQWxDLDZCQUFBLEVBQUEsb0JBQW9CO1FBQUUsd0JBQUEsRUFBQSxZQUFZO1FBQ3hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXpDLElBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxHQUFHLEVBQUUsT0FBTyxFQUFFLFlBQW9CO1FBQXBCLDZCQUFBLEVBQUEsb0JBQW9CO1FBQ3pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sMkJBQU0sR0FBYixVQUFjLEdBQUcsRUFBRSxPQUFZLEVBQUUsWUFBb0I7UUFBbEMsd0JBQUEsRUFBQSxZQUFZO1FBQUUsNkJBQUEsRUFBQSxvQkFBb0I7UUFDakQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzt3RUFuRVEsVUFBVSwwQ0FNbUIsTUFBTTtzREFObkMsVUFBVSxXQUFWLFVBQVU7cUJBUnZCO0NBNEVDLEFBckVELElBcUVDO1NBcEVZLFVBQVU7a0RBQVYsVUFBVTtjQUR0QixVQUFVOztzQkFPd0IsTUFBTTt1QkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGlSb290OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgQEluamVjdChDT05GSUcpIGNvbmZpZykge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICBjb25zdCByb290ID0gY29uZmlnLmFwaV9yb290O1xuXG4gICAgICAgIHRoaXMuc2V0QmFzZVVybChyb290KTtcbiAgICAgICAgdGhpcy5zZXRBcGlSb290KHJvb3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCYXNlVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QXBpUm9vdCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwaVJvb3QgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFwaVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaVJvb3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVcmwodXJpLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBpZiggISBieXBhc3NQcmVmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICcvJyArIHVyaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFwaVJvb3QoKSArICcvJyArIHVyaTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSk6IGFueSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCk7XG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgb3B0aW9ucykucGlwZSh0YWtlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdCh1cmksIHBheWxvYWQsIGJ5cGFzc1ByZWZpeCA9IGZhbHNlLCBvcHRpb25zID0ge30pOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHBheWxvYWQsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG59XG4iXX0=