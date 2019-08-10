/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { ApiService } from './api.service';
import { ModelFactory } from '../models/model.factory';
import { Models } from "../models/models";
import { map } from "rxjs/operators";
export class BackendService {
    /**
     * @param {?} api
     */
    constructor(api) {
        this.api = api;
    }
    // set model
    /**
     * @param {?} model
     * @return {?}
     */
    setModel(model) {
        this.model = model;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    find(id) {
        /** @type {?} */
        let constructor = Models.get(this.model.key);
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map((/**
         * @param {?} client
         * @return {?}
         */
        (client) => {
            client.data = ModelFactory.make(Models.get(this.model.key), client.data);
            return client;
        })));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    save(data) {
        if (data[data.getKey()]) {
            return this.update(data);
        }
        return this.createNew(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        /** @type {?} */
        let payload = data.serialize();
        return this.api.put(data.getUri() + '/' + data[data.getKey()], payload);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    createNew(data) {
        /** @type {?} */
        let payload = data.serialize();
        return this.api.post(data.getUri(), payload);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    destroy(data) {
        return this.api.delete(data.getUri() + '/' + data[data.getKey()]);
    }
    /**
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    get(model = null, options = { page: 1 }) {
        /** @type {?} */
        let requestOptions = {
            params: new HttpParams()
        };
        if (options.page != 1) {
            requestOptions.params = new HttpParams().set('page', String(options.page));
        }
        /** @type {?} */
        let observable;
        if (model === null) {
            observable = this.api.get(new this.model().getUri(), requestOptions);
        }
        else {
            observable = this.api.get(model.getUri(), requestOptions);
        }
        return observable.pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            let data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
            return response;
        })));
    }
    /**
     * @param {?} related
     * @param {?} key
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    getRelated(related, key, model = null, options = {}) {
        if (model == null) {
            model = this.model;
        }
        /** @type {?} */
        let constructor = Models.get(model.key);
        model = ModelFactory.makeRelated(new constructor(), related, key);
        return this.get(model);
    }
}
BackendService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BackendService.ctorParameters = () => [
    { type: ApiService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.model;
    /**
     * @type {?}
     * @protected
     */
    BackendService.prototype.api;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE1BQU0sT0FBTyxjQUFjOzs7O0lBS3ZCLFlBQXNCLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQ3JDLENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsRUFBRTs7WUFDQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNoRixNQUFNLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FB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QUksV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFoRkosVUFBVTs7OztZQU5GLFVBQVU7Ozs7Ozs7SUFVZiwrQkFBZ0I7Ozs7O0lBRUosNkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSBcIi4uL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cblxuICAgIHByb3RlY3RlZCBtb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcGk6IEFwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICAvLyBzZXQgbW9kZWxcbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgZmluZChpZCkge1xuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldChuZXcgY29uc3RydWN0b3IoKS5nZXRVcmkoKSArICcvJyArIGlkKS5waXBlKG1hcCgoY2xpZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNsaWVudC5kYXRhID0gTW9kZWxGYWN0b3J5Lm1ha2UoTW9kZWxzLmdldCh0aGlzLm1vZGVsLmtleSksIGNsaWVudC5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzYXZlKGRhdGEpIHtcbiAgICAgICAgaWYoZGF0YVtkYXRhLmdldEtleSgpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5ldyhkYXRhKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IGRhdGEuc2VyaWFsaXplKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5wdXQoZGF0YS5nZXRVcmkoKSArICcvJyArIGRhdGFbZGF0YS5nZXRLZXkoKV0sIHBheWxvYWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldyhkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QoZGF0YS5nZXRVcmkoKSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgZGVzdHJveShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5kZWxldGUoZGF0YS5nZXRVcmkoKSArICcvJyArIGRhdGFbZGF0YS5nZXRLZXkoKV0pO1xuICAgIH1cblxuICAgIGdldChtb2RlbCA9IG51bGwsIG9wdGlvbnM6IGFueSA9IHsgcGFnZTogMSB9KSB7XG5cblxuICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKG9wdGlvbnMucGFnZSAhPSAxKSB7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgncGFnZScsIFN0cmluZyhvcHRpb25zLnBhZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvYnNlcnZhYmxlO1xuXG4gICAgICAgIGlmKG1vZGVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdGhpcy5hcGkuZ2V0KG5ldyB0aGlzLm1vZGVsKCkuZ2V0VXJpKCksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobW9kZWwuZ2V0VXJpKCksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZChyZWxhdGVkLCBrZXksIG1vZGVsID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmKG1vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQobW9kZWwua2V5KTtcbiAgICAgICAgbW9kZWwgPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWQobmV3IGNvbnN0cnVjdG9yKCksIHJlbGF0ZWQsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1vZGVsKTtcbiAgICB9XG5cbn1cbiJdfQ==