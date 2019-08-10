/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQUE7SUFjQSxDQUFDOzs7OztJQVZVLFVBQUc7Ozs7SUFBVixVQUFXLEtBQUs7O1lBQ1IsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDMUQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDcEM7SUFDTCxDQUFDOzs7OztJQUVNLFVBQUc7Ozs7SUFBVixVQUFXLEtBQUs7UUFDWixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVhNLGFBQU0sR0FBRyxFQUFFLENBQUM7SUFZdkIsYUFBQztDQUFBLEFBZEQsSUFjQztTQWRZLE1BQU07OztJQUVmLGNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1vZGVscyB7XG5cbiAgICBzdGF0aWMgbW9kZWxzID0ge307XG5cbiAgICBzdGF0aWMgYWRkKG1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbE5hbWUgPSBuZXcgbW9kZWwoKS5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKCFNb2RlbHMubW9kZWxzW21vZGVsTmFtZV0pIHtcbiAgICAgICAgICAgIE1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChtb2RlbCkge1xuICAgICAgICByZXR1cm4gTW9kZWxzLm1vZGVsc1ttb2RlbF07XG4gICAgfVxufSJdfQ==