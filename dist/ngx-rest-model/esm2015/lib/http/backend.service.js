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
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map((client) => {
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
        return observable.pipe(map((response) => {
            /** @type {?} */
            let data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
            return response;
        }));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE1BQU07Ozs7SUFLRixZQUFzQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtLQUNwQzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELElBQUksQ0FBQyxFQUFFOztRQUNILElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FB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Q2YsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdEI7O1FBRUQsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsS0FBSyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7OztZQWhGSixVQUFVOzs7O1lBTkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGVsRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9tb2RlbC5mYWN0b3J5JztcbmltcG9ydCB7IE1vZGVscyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kZWxzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG5cbiAgICBwcm90ZWN0ZWQgbW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXBpOiBBcGlTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgLy8gc2V0IG1vZGVsXG4gICAgc2V0TW9kZWwobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIH1cblxuICAgIGZpbmQoaWQpIHtcbiAgICAgICAgbGV0IGNvbnN0cnVjdG9yID0gTW9kZWxzLmdldCh0aGlzLm1vZGVsLmtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXQobmV3IGNvbnN0cnVjdG9yKCkuZ2V0VXJpKCkgKyAnLycgKyBpZCkucGlwZShtYXAoKGNsaWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBjbGllbnQuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlKE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBjbGllbnQuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2F2ZShkYXRhKSB7XG4gICAgICAgIGlmKGRhdGFbZGF0YS5nZXRLZXkoKV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucHV0KGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoZGF0YSkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IGRhdGEuc2VyaWFsaXplKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KGRhdGEuZ2V0VXJpKCksIHBheWxvYWQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZGVsZXRlKGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldKTtcbiAgICB9XG5cbiAgICBnZXQobW9kZWwgPSBudWxsLCBvcHRpb25zOiBhbnkgPSB7IHBhZ2U6IDEgfSkge1xuXG5cbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zOiBhbnkgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgICAgfTtcblxuICAgICAgICBpZihvcHRpb25zLnBhZ2UgIT0gMSkge1xuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3BhZ2UnLCBTdHJpbmcob3B0aW9ucy5wYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2JzZXJ2YWJsZTtcblxuICAgICAgICBpZihtb2RlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChuZXcgdGhpcy5tb2RlbCgpLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdGhpcy5hcGkuZ2V0KG1vZGVsLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZUZyb21BcnJheShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFJlbGF0ZWQocmVsYXRlZCwga2V5LCBtb2RlbCA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZihtb2RlbCA9PSBudWxsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KG1vZGVsLmtleSk7XG4gICAgICAgIG1vZGVsID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkKG5ldyBjb25zdHJ1Y3RvcigpLCByZWxhdGVkLCBrZXkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldChtb2RlbCk7XG4gICAgfVxuXG59XG4iXX0=