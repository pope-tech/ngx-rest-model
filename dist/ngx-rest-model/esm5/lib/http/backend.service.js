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
        observable = observable.map(function (response) {
            /** @type {?} */
            var data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(_this.model.key), data);
            return response;
        });
        return observable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQVNqQyx3QkFBc0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7S0FDcEM7SUFFRCxZQUFZOzs7OztJQUNaLGlDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7O0lBRUQsNkJBQUk7Ozs7SUFBSixVQUFLLEVBQUU7UUFBUCxpQkFNQzs7UUFMRyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ3RFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDakIsQ0FBQyxDQUFDLENBQUM7S0FDUDs7Ozs7SUFFRCw2QkFBSTs7OztJQUFKLFVBQUssSUFBSTtRQUNMLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCwrQkFBTTs7OztJQUFOLFVBQU8sSUFBSTs7UUFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNFOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxJQUFJOztRQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hEOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxJQUFJO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckU7Ozs7OztJQUVELDRCQUFHOzs7OztJQUFILFVBQUksS0FBWSxFQUFFLE9BQTBCO1FBQTVDLGlCQTBCQztRQTFCRyxzQkFBQSxFQUFBLFlBQVk7UUFBRSx3QkFBQSxFQUFBLFlBQWlCLElBQUksRUFBRSxDQUFDLEVBQUU7O1FBR3hDLElBQUksY0FBYyxHQUFRO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLFVBQVUsRUFBRTtTQUMzQixDQUFDO1FBRUYsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5RTs7UUFFRCxJQUFJLFVBQVUsQ0FBQztRQUVmLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN4RTtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM3RDtRQUVELFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTs7WUFDaEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN6QixRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUNyQjs7Ozs7Ozs7SUFFRCxtQ0FBVTs7Ozs7OztJQUFWLFVBQVcsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFZLEVBQUUsT0FBWTtRQUExQixzQkFBQSxFQUFBLFlBQVk7UUFBRSx3QkFBQSxFQUFBLFlBQVk7UUFDL0MsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN0Qjs7UUFFRCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxLQUFLLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7Z0JBaEZKLFVBQVU7Ozs7Z0JBTkYsVUFBVTs7eUJBSG5COztTQVVhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuXG4gICAgcHJvdGVjdGVkIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwaTogQXBpU2VydmljZSkge1xuICAgIH1cblxuICAgIC8vIHNldCBtb2RlbFxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBmaW5kKGlkKSB7XG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KG5ldyBjb25zdHJ1Y3RvcigpLmdldFVyaSgpICsgJy8nICsgaWQpLnBpcGUobWFwKGNsaWVudCA9PiB7XG4gICAgICAgICAgICBjbGllbnQuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlKE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBjbGllbnQuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2F2ZShkYXRhKSB7XG4gICAgICAgIGlmKGRhdGFbZGF0YS5nZXRLZXkoKV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucHV0KGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoZGF0YSkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IGRhdGEuc2VyaWFsaXplKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KGRhdGEuZ2V0VXJpKCksIHBheWxvYWQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZGVsZXRlKGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldKTtcbiAgICB9XG5cbiAgICBnZXQobW9kZWwgPSBudWxsLCBvcHRpb25zOiBhbnkgPSB7IHBhZ2U6IDEgfSkge1xuXG5cbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zOiBhbnkgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgICAgfTtcblxuICAgICAgICBpZihvcHRpb25zLnBhZ2UgIT0gMSkge1xuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3BhZ2UnLCBTdHJpbmcob3B0aW9ucy5wYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2JzZXJ2YWJsZTtcblxuICAgICAgICBpZihtb2RlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChuZXcgdGhpcy5tb2RlbCgpLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdGhpcy5hcGkuZ2V0KG1vZGVsLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZS5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZChyZWxhdGVkLCBrZXksIG1vZGVsID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmKG1vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQobW9kZWwua2V5KTtcbiAgICAgICAgbW9kZWwgPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWQobmV3IGNvbnN0cnVjdG9yKCksIHJlbGF0ZWQsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1vZGVsKTtcbiAgICB9XG5cbn1cbiJdfQ==