/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Models = /** @class */ (function () {
    function Models() {
    }
    /**
     * @param {?} model
     * @return {?}
     */
    Models.add = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        /** @type {?} */
        var modelName = new model().constructor.name.toLowerCase();
        if (!Models.models[modelName]) {
            Models.models[modelName] = model;
        }
    };
    /**
     * @param {?} model
     * @return {?}
     */
    Models.get = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        return Models.models[model];
    };
    Models.models = {};
    return Models;
}());
export { Models };
if (false) {
    /** @type {?} */
    Models.models;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJVyxVQUFHOzs7O0lBQVYsVUFBVyxLQUFLOztRQUNaLElBQUksU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzRCxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO0tBQ0o7Ozs7O0lBRU0sVUFBRzs7OztJQUFWLFVBQVcsS0FBSztRQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9CO29CQVhlLEVBQUU7aUJBRnRCOztTQUFhLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kZWxzIHtcblxuICAgIHN0YXRpYyBtb2RlbHMgPSB7fTtcblxuICAgIHN0YXRpYyBhZGQobW9kZWwpIHtcbiAgICAgICAgbGV0IG1vZGVsTmFtZSA9IG5ldyBtb2RlbCgpLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYoIU1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSkge1xuICAgICAgICAgICAgTW9kZWxzLm1vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KG1vZGVsKSB7XG4gICAgICAgIHJldHVybiBNb2RlbHMubW9kZWxzW21vZGVsXTtcbiAgICB9XG59Il19