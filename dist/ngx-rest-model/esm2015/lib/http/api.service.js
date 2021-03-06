import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";
import { CONFIG } from '../constants';
export class ApiService {
    constructor(http, config) {
        this.http = http;
        const root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    setApiRoot(url) {
        this.apiRoot = url;
    }
    getApiRoot() {
        return this.apiRoot;
    }
    getUrl(uri, bypassPrefix = false) {
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    }
    get(uri, options = {}, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    }
    post(uri, payload, bypassPrefix = false, options = {}) {
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    }
    put(uri, payload, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    }
    delete(uri, options = {}, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    }
}
ApiService.decorators = [
    { type: Injectable }
];
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcmVzdC1tb2RlbC9zcmMvbGliL2h0dHAvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3RDLE1BQU0sT0FBTyxVQUFVO0lBTW5CLFlBQVksSUFBZ0IsRUFBa0IsTUFBTTtRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sVUFBVSxDQUFDLEdBQVc7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFXO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksR0FBRyxLQUFLO1FBQ3BDLElBQUksQ0FBRSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDekMsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsS0FBSztRQUM5QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFHLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBWSxHQUFHLEtBQUssRUFBRSxPQUFPLEdBQUcsRUFBRTtRQUV4RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV6QyxJQUFHLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTSxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZLEdBQUcsS0FBSztRQUN6QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsS0FBSztRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFyRUosVUFBVTs7O1lBTEYsVUFBVTs0Q0FZZ0IsTUFBTSxTQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIGFwaVJvb3Q6IHN0cmluZztcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KENPTkZJRykgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjb25maWcuYXBpX3Jvb3Q7XG5cbiAgICAgICAgdGhpcy5zZXRCYXNlVXJsKHJvb3QpO1xuICAgICAgICB0aGlzLnNldEFwaVJvb3Qocm9vdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJhc2VVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCYXNlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBcGlSb290KHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBpUm9vdCA9IHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXBpUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpUm9vdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVybCh1cmksIGJ5cGFzc1ByZWZpeCA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCAhIGJ5cGFzc1ByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFzZVVybCgpICsgJy8nICsgdXJpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpUm9vdCgpICsgJy8nICsgdXJpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQodXJpLCBvcHRpb25zID0ge30sIGJ5cGFzc1ByZWZpeCA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcbiAgICAgICAgaWYob3B0aW9ucyAhPSB7fSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UsIG9wdGlvbnMgPSB7fSk6IGFueSB7XG5cbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIl19