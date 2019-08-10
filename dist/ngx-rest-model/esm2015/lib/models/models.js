/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxNQUFNOzs7OztJQUlmLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSzs7WUFDUixTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUMxRCxJQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNwQztJQUNMLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLO1FBQ1osT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O0FBWE0sYUFBTSxHQUFHLEVBQUUsQ0FBQzs7O0lBQW5CLGNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1vZGVscyB7XG5cbiAgICBzdGF0aWMgbW9kZWxzID0ge307XG5cbiAgICBzdGF0aWMgYWRkKG1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbE5hbWUgPSBuZXcgbW9kZWwoKS5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKCFNb2RlbHMubW9kZWxzW21vZGVsTmFtZV0pIHtcbiAgICAgICAgICAgIE1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChtb2RlbCkge1xuICAgICAgICByZXR1cm4gTW9kZWxzLm1vZGVsc1ttb2RlbF07XG4gICAgfVxufSJdfQ==