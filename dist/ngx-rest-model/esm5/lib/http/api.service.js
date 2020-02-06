import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";
import { CONFIG } from '../constants';
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
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
    ]; };
    ApiService = __decorate([
        Injectable(),
        __param(1, Inject(CONFIG)),
        __metadata("design:paramtypes", [HttpClient, Object])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvIiwic291cmNlcyI6WyJsaWIvaHR0cC9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3RDO0lBTUksb0JBQVksSUFBZ0IsRUFBa0IsTUFBTTtRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsR0FBVztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRU0sK0JBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTywyQkFBTSxHQUFkLFVBQWUsR0FBRyxFQUFFLFlBQW9CO1FBQXBCLDZCQUFBLEVBQUEsb0JBQW9CO1FBQ3BDLElBQUksQ0FBRSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDekMsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxHQUFHLEVBQUUsT0FBWSxFQUFFLFlBQW9CO1FBQWxDLHdCQUFBLEVBQUEsWUFBWTtRQUFFLDZCQUFBLEVBQUEsb0JBQW9CO1FBQzlDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx5QkFBSSxHQUFYLFVBQVksR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFvQixFQUFFLE9BQVk7UUFBbEMsNkJBQUEsRUFBQSxvQkFBb0I7UUFBRSx3QkFBQSxFQUFBLFlBQVk7UUFDeEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFekMsSUFBRyxPQUFPLElBQUksRUFBRSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBb0I7UUFBcEIsNkJBQUEsRUFBQSxvQkFBb0I7UUFDekMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsR0FBRyxFQUFFLE9BQVksRUFBRSxZQUFvQjtRQUFsQyx3QkFBQSxFQUFBLFlBQVk7UUFBRSw2QkFBQSxFQUFBLG9CQUFvQjtRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkE3RGlCLFVBQVU7Z0RBQUcsTUFBTSxTQUFDLE1BQU07O0lBTm5DLFVBQVU7UUFEdEIsVUFBVSxFQUFFO1FBT3NCLFdBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO3lDQUEzQixVQUFVO09BTm5CLFVBQVUsQ0FvRXRCO0lBQUQsaUJBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQXBFWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGlSb290OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgQEluamVjdChDT05GSUcpIGNvbmZpZykge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICBjb25zdCByb290ID0gY29uZmlnLmFwaV9yb290O1xuXG4gICAgICAgIHRoaXMuc2V0QmFzZVVybChyb290KTtcbiAgICAgICAgdGhpcy5zZXRBcGlSb290KHJvb3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCYXNlVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QXBpUm9vdCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwaVJvb3QgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFwaVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaVJvb3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVcmwodXJpLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBpZiggISBieXBhc3NQcmVmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJhc2VVcmwoKSArICcvJyArIHVyaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFwaVJvb3QoKSArICcvJyArIHVyaTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSk6IGFueSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCk7XG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgb3B0aW9ucykucGlwZSh0YWtlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdCh1cmksIHBheWxvYWQsIGJ5cGFzc1ByZWZpeCA9IGZhbHNlLCBvcHRpb25zID0ge30pOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIGlmKG9wdGlvbnMgIT0ge30pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHBheWxvYWQsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKHVyaSwgb3B0aW9ucyA9IHt9LCBieXBhc3NQcmVmaXggPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG59XG4iXX0=