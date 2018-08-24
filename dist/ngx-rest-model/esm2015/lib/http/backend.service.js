/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map(client => {
            client.data = ModelFactory.make(Models.get(this.model.key), client.data);
            return client;
        }));
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
        observable = observable.map(response => {
            /** @type {?} */
            let data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
            return response;
        });
        return observable;
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
    { type: Injectable },
];
/** @nocollapse */
BackendService.ctorParameters = () => [
    { type: ApiService }
];
if (false) {
    /** @type {?} */
    BackendService.prototype.model;
    /** @type {?} */
    BackendService.prototype.api;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE1BQU07Ozs7SUFLRixZQUFzQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtLQUNwQzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELElBQUksQ0FBQyxFQUFFOztRQUNILElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6RSxNQUFNLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FB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QUNmLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3RCOztRQUVELElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLEtBQUssR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7WUFoRkosVUFBVTs7OztZQU5GLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuXG4gICAgcHJvdGVjdGVkIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwaTogQXBpU2VydmljZSkge1xuICAgIH1cblxuICAgIC8vIHNldCBtb2RlbFxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBmaW5kKGlkKSB7XG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KG5ldyBjb25zdHJ1Y3RvcigpLmdldFVyaSgpICsgJy8nICsgaWQpLnBpcGUobWFwKGNsaWVudCA9PiB7XG4gICAgICAgICAgICBjbGllbnQuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlKE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBjbGllbnQuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2F2ZShkYXRhKSB7XG4gICAgICAgIGlmKGRhdGFbZGF0YS5nZXRLZXkoKV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucHV0KGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoZGF0YSkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IGRhdGEuc2VyaWFsaXplKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KGRhdGEuZ2V0VXJpKCksIHBheWxvYWQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZGVsZXRlKGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldKTtcbiAgICB9XG5cbiAgICBnZXQobW9kZWwgPSBudWxsLCBvcHRpb25zOiBhbnkgPSB7IHBhZ2U6IDEgfSkge1xuXG5cbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zOiBhbnkgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgICAgfTtcblxuICAgICAgICBpZihvcHRpb25zLnBhZ2UgIT0gMSkge1xuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3BhZ2UnLCBTdHJpbmcob3B0aW9ucy5wYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2JzZXJ2YWJsZTtcblxuICAgICAgICBpZihtb2RlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChuZXcgdGhpcy5tb2RlbCgpLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdGhpcy5hcGkuZ2V0KG1vZGVsLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZS5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZChyZWxhdGVkLCBrZXksIG1vZGVsID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmKG1vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQobW9kZWwua2V5KTtcbiAgICAgICAgbW9kZWwgPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWQobmV3IGNvbnN0cnVjdG9yKCksIHJlbGF0ZWQsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1vZGVsKTtcbiAgICB9XG5cbn1cbiJdfQ==