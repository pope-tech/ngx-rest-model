/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class Models {
    /**
     * @param {?} model
     * @return {?}
     */
    static add(model) {
        /** @type {?} */
        let modelName = new model().constructor.name.toLowerCase();
        if (!Models.models[modelName]) {
            Models.models[modelName] = model;
        }
    }
    /**
     * @param {?} model
     * @return {?}
     */
    static get(model) {
        return Models.models[model];
    }
}
Models.models = {};
if (false) {
    /** @type {?} */
    Models.models;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07Ozs7O0lBSUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLOztRQUNaLElBQUksU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzRCxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO0tBQ0o7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7O2dCQVhlLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kZWxzIHtcblxuICAgIHN0YXRpYyBtb2RlbHMgPSB7fTtcblxuICAgIHN0YXRpYyBhZGQobW9kZWwpIHtcbiAgICAgICAgbGV0IG1vZGVsTmFtZSA9IG5ldyBtb2RlbCgpLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYoIU1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSkge1xuICAgICAgICAgICAgTW9kZWxzLm1vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KG1vZGVsKSB7XG4gICAgICAgIHJldHVybiBNb2RlbHMubW9kZWxzW21vZGVsXTtcbiAgICB9XG59Il19