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
var BackendService = /** @class */ (function () {
    function BackendService(api) {
        this.api = api;
    }
    // set model
    /**
     * @param {?} model
     * @return {?}
     */
    BackendService.prototype.setModel = /**
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
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map(function (client) {
            client.data = ModelFactory.make(Models.get(_this.model.key), client.data);
            return client;
        }));
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
        return observable.pipe(map(function (response) {
            /** @type {?} */
            var data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(_this.model.key), data);
            return response;
        }));
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
        { type: Injectable },
    ];
    /** @nocollapse */
    BackendService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    return BackendService;
}());
export { BackendService };
if (false) {
    /** @type {?} */
    BackendService.prototype.model;
    /** @type {?} */
    BackendService.prototype.api;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQVNqQyx3QkFBc0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7S0FDcEM7SUFFRCxZQUFZOzs7OztJQUNaLGlDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7O0lBRUQsNkJBQUk7Ozs7SUFBSixVQUFLLEVBQUU7UUFBUCxpQkFNQzs7UUFMRyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFXO1lBQzVFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDakIsQ0FBQyxDQUFDLENBQUM7S0FDUDs7Ozs7SUFFRCw2QkFBSTs7OztJQUFKLFVBQUssSUFBSTtRQUNMLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCwrQkFBTTs7OztJQUFOLFVBQU8sSUFBSTs7UUFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNFOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxJQUFJOztRQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hEOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxJQUFJO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckU7Ozs7OztJQUVELDRCQUFHOzs7OztJQUFILFVBQUksS0FBWSxFQUFFLE9BQTBCO1FBQTVDLGlCQTBCQztRQTFCRyxzQkFBQSxFQUFBLFlBQVk7UUFBRSx3QkFBQSxFQUFBLFlBQWlCLElBQUksRUFBRSxDQUFDLEVBQUU7O1FBR3hDLElBQUksY0FBYyxHQUFRO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLFVBQVUsRUFBRTtTQUMzQixDQUFDO1FBRUYsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5RTs7UUFFRCxJQUFJLFVBQVUsQ0FBQztRQUVmLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN4RTtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM3RDtRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNkLEdBQUcsQ0FBQyxVQUFDLFFBQWE7O1lBQ2QsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN6QixRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDbkIsQ0FBQyxDQUNULENBQUM7S0FDTDs7Ozs7Ozs7SUFFRCxtQ0FBVTs7Ozs7OztJQUFWLFVBQVcsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFZLEVBQUUsT0FBWTtRQUExQixzQkFBQSxFQUFBLFlBQVk7UUFBRSx3QkFBQSxFQUFBLFlBQVk7UUFDL0MsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN0Qjs7UUFFRCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxLQUFLLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7Z0JBaEZKLFVBQVU7Ozs7Z0JBTkYsVUFBVTs7eUJBSG5COztTQVVhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuXG4gICAgcHJvdGVjdGVkIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwaTogQXBpU2VydmljZSkge1xuICAgIH1cblxuICAgIC8vIHNldCBtb2RlbFxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBmaW5kKGlkKSB7XG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KG5ldyBjb25zdHJ1Y3RvcigpLmdldFVyaSgpICsgJy8nICsgaWQpLnBpcGUobWFwKChjbGllbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY2xpZW50LmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgY2xpZW50LmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNhdmUoZGF0YSkge1xuICAgICAgICBpZihkYXRhW2RhdGEuZ2V0S2V5KCldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTmV3KGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnB1dChkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucG9zdChkYXRhLmdldFVyaSgpLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmRlbGV0ZShkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSk7XG4gICAgfVxuXG4gICAgZ2V0KG1vZGVsID0gbnVsbCwgb3B0aW9uczogYW55ID0geyBwYWdlOiAxIH0pIHtcblxuXG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYob3B0aW9ucy5wYWdlICE9IDEpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdwYWdlJywgU3RyaW5nKG9wdGlvbnMucGFnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9ic2VydmFibGU7XG5cbiAgICAgICAgaWYobW9kZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobmV3IHRoaXMubW9kZWwoKS5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChtb2RlbC5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gTW9kZWxGYWN0b3J5Lm1ha2VGcm9tQXJyYXkoTW9kZWxzLmdldCh0aGlzLm1vZGVsLmtleSksIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkKHJlbGF0ZWQsIGtleSwgbW9kZWwgPSBudWxsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYobW9kZWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnN0cnVjdG9yID0gTW9kZWxzLmdldChtb2RlbC5rZXkpO1xuICAgICAgICBtb2RlbCA9IE1vZGVsRmFjdG9yeS5tYWtlUmVsYXRlZChuZXcgY29uc3RydWN0b3IoKSwgcmVsYXRlZCwga2V5KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQobW9kZWwpO1xuICAgIH1cblxufVxuIl19