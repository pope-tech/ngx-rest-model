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
var BackendService = /** @class */ (function () {
    function BackendService(api) {
        this.api = api;
    }
    // set model
    // set model
    /**
     * @param {?} model
     * @return {?}
     */
    BackendService.prototype.setModel = 
    // set model
    /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BackendService.prototype.find = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        /** @type {?} */
        var constructor = Models.get(this.model.key);
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map((/**
         * @param {?} client
         * @return {?}
         */
        function (client) {
            client.data = ModelFactory.make(Models.get(_this.model.key), client.data);
            return client;
        })));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.save = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data[data.getKey()]) {
            return this.update(data);
        }
        return this.createNew(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.update = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var payload = data.serialize();
        return this.api.put(data.getUri() + '/' + data[data.getKey()], payload);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.createNew = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var payload = data.serialize();
        return this.api.post(data.getUri(), payload);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.destroy = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.api.delete(data.getUri() + '/' + data[data.getKey()]);
    };
    /**
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    BackendService.prototype.get = /**
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    function (model, options) {
        var _this = this;
        if (model === void 0) { model = null; }
        if (options === void 0) { options = { page: 1 }; }
        /** @type {?} */
        var requestOptions = {
            params: new HttpParams()
        };
        if (options.page != 1) {
            requestOptions.params = new HttpParams().set('page', String(options.page));
        }
        /** @type {?} */
        var observable;
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
        function (response) {
            /** @type {?} */
            var data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(_this.model.key), data);
            return response;
        })));
    };
    /**
     * @param {?} related
     * @param {?} key
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    BackendService.prototype.getRelated = /**
     * @param {?} related
     * @param {?} key
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    function (related, key, model, options) {
        if (model === void 0) { model = null; }
        if (options === void 0) { options = {}; }
        if (model == null) {
            model = this.model;
        }
        /** @type {?} */
        var constructor = Models.get(model.key);
        model = ModelFactory.makeRelated(new constructor(), related, key);
        return this.get(model);
    };
    BackendService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BackendService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    return BackendService;
}());
export { BackendService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDO0lBTUksd0JBQXNCLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQ3JDLENBQUM7SUFFRCxZQUFZOzs7Ozs7SUFDWixpQ0FBUTs7Ozs7O0lBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCw2QkFBSTs7OztJQUFKLFVBQUssRUFBRTtRQUFQLGlCQU1DOztZQUxPLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQVc7WUFDNUUsTUFBTSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMs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SyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdEI7O1lBRUcsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxLQUFLLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBaEZKLFVBQVU7Ozs7Z0JBTkYsVUFBVTs7SUF3Rm5CLHFCQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0FqRlksY0FBYzs7Ozs7O0lBR3ZCLCtCQUFnQjs7Ozs7SUFFSiw2QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuXG4gICAgcHJvdGVjdGVkIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwaTogQXBpU2VydmljZSkge1xuICAgIH1cblxuICAgIC8vIHNldCBtb2RlbFxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBmaW5kKGlkKSB7XG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KG5ldyBjb25zdHJ1Y3RvcigpLmdldFVyaSgpICsgJy8nICsgaWQpLnBpcGUobWFwKChjbGllbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY2xpZW50LmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgY2xpZW50LmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNhdmUoZGF0YSkge1xuICAgICAgICBpZihkYXRhW2RhdGEuZ2V0S2V5KCldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTmV3KGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnB1dChkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucG9zdChkYXRhLmdldFVyaSgpLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmRlbGV0ZShkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSk7XG4gICAgfVxuXG4gICAgZ2V0KG1vZGVsID0gbnVsbCwgb3B0aW9uczogYW55ID0geyBwYWdlOiAxIH0pIHtcblxuXG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYob3B0aW9ucy5wYWdlICE9IDEpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdwYWdlJywgU3RyaW5nKG9wdGlvbnMucGFnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9ic2VydmFibGU7XG5cbiAgICAgICAgaWYobW9kZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobmV3IHRoaXMubW9kZWwoKS5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChtb2RlbC5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gTW9kZWxGYWN0b3J5Lm1ha2VGcm9tQXJyYXkoTW9kZWxzLmdldCh0aGlzLm1vZGVsLmtleSksIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkKHJlbGF0ZWQsIGtleSwgbW9kZWwgPSBudWxsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYobW9kZWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnN0cnVjdG9yID0gTW9kZWxzLmdldChtb2RlbC5rZXkpO1xuICAgICAgICBtb2RlbCA9IE1vZGVsRmFjdG9yeS5tYWtlUmVsYXRlZChuZXcgY29uc3RydWN0b3IoKSwgcmVsYXRlZCwga2V5KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQobW9kZWwpO1xuICAgIH1cblxufVxuIl19