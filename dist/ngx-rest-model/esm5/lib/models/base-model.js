/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ModelFactory } from './model.factory';
import { Relationship } from './relationship';
import { Models } from './models';
var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this.modelConfig = {
            key: '',
            uri: '',
            hidden: [],
            relationships: {}
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    BaseModel.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.modelConfig = tslib_1.__assign({}, this.getConfig(), config);
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.modelConfig;
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getUri = /**
     * @return {?}
     */
    function () {
        return this.modelConfig.uri;
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getSelfUri = /**
     * @return {?}
     */
    function () {
        return this.modelConfig.uri + '/' + this[this.modelConfig.key];
    };
    /**
     * @param {?} uri
     * @return {?}
     */
    BaseModel.prototype.setUri = /**
     * @param {?} uri
     * @return {?}
     */
    function (uri) {
        this.modelConfig.uri = uri;
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getKey = /**
     * @return {?}
     */
    function () {
        return this.modelConfig.key;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    BaseModel.prototype.getRelationship = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.modelConfig.relationships[key];
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} input
     * @return {THIS}
     */
    BaseModel.prototype.deserialize = /**
     * @template THIS
     * @this {THIS}
     * @param {?} input
     * @return {THIS}
     */
    function (input) {
        var e_1, _a;
        /** @type {?} */
        var config = (/** @type {?} */ (this)).getConfig();
        /** @type {?} */
        var relationships = [];
        for (var prop in input) {
            if (!input.hasOwnProperty(prop)) {
                continue;
            }
            if (config.hidden.indexOf(prop) > -1) {
                continue;
            }
            if (typeof input[prop] === 'object') {
                if (config.relationships.hasOwnProperty((/** @type {?} */ (this)).snakeToCamel(prop))) {
                    relationships.push({
                        key: (/** @type {?} */ (this)).snakeToCamel(prop),
                        value: (input[prop] ? input[prop].data : null)
                    });
                }
                continue;
            }
            (/** @type {?} */ (this))[(/** @type {?} */ (this)).snakeToCamel(prop)] = input[prop];
        }
        try {
            for (var relationships_1 = tslib_1.__values(relationships), relationships_1_1 = relationships_1.next(); !relationships_1_1.done; relationships_1_1 = relationships_1.next()) {
                var relationship = relationships_1_1.value;
                if (relationship.value === null) {
                    continue;
                }
                /** @type {?} */
                var relationshipConfig = config.relationships[relationship.key];
                /** @type {?} */
                var related = Models.get(relationshipConfig.model);
                /** @type {?} */
                var relationshipObject = new Relationship((/** @type {?} */ (this)), related, relationshipConfig.type);
                (/** @type {?} */ (this))[relationship.key] = ModelFactory.makeRelatedFromRelationship(relationshipObject, relationship.value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (relationships_1_1 && !relationships_1_1.done && (_a = relationships_1.return)) _a.call(relationships_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} string
     * @return {?}
     */
    BaseModel.prototype.snakeToCamel = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        return string.replace(/_\w/g, (/**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            return m[1].toUpperCase();
        }));
    };
    return BaseModel;
}());
export { BaseModel };
if (false) {
    /** @type {?} */
    BaseModel.prototype.modelConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQztJQVVJO1FBUFEsZ0JBQVcsR0FBRztZQUNqQixHQUFHLEVBQUUsRUFBRTtZQUNQLEdBQUcsRUFBRSxFQUFFO1lBQ1AsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsRUFBRTtTQUNyQixDQUFDO0lBRWEsQ0FBQzs7Ozs7SUFFaEIsNkJBQVM7Ozs7SUFBVCxVQUFVLE1BQU07UUFDWixJQUFJLENBQUMsV0FBVyx3QkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUssTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsMEJBQU07OztJQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsOEJBQVU7OztJQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCwwQkFBTTs7OztJQUFOLFVBQU8sR0FBRztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsMEJBQU07OztJQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELG1DQUFlOzs7O0lBQWYsVUFBZ0IsR0FBRztRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7OztJQUVELCtCQUFXOzs7Ozs7SUFBWCxVQUFZLEtBQUs7OztZQUVULE1BQU0sR0FBRyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLEVBQUU7O1lBQ3pCLGFBQWEsR0FBRyxFQUFFO1FBQ3RCLEtBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ25CLElBQUcsQ0FBRSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixTQUFTO2FBQ1o7WUFFRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxTQUFTO2FBQ1o7WUFFRCxJQUFHLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFFaEMsSUFBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDN0QsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDZixHQUFHLEVBQUUsbUJBQUEsSUFBSSxFQUFBLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzt3QkFDNUIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7cUJBQ2pELENBQUMsQ0FBQztpQkFDTjtnQkFFRCxTQUFTO2FBQ1o7WUFFRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7O1lBRUQsS0FBd0IsSUFBQSxrQkFBQSxpQkFBQSxhQUFhLENBQUEsNENBQUEsdUVBQUU7Z0JBQW5DLElBQUksWUFBWSwwQkFBQTtnQkFFaEIsSUFBRyxZQUFZLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDNUIsU0FBUztpQkFDWjs7b0JBRUcsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDOztvQkFFM0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDOztvQkFFOUMsa0JBQWtCLEdBQUcsSUFBSSxZQUFZLENBQUMsbUJBQUEsSUFBSSxFQUFBLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFFakYsbUJBQUEsSUFBSSxFQUFBLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0c7Ozs7Ozs7OztRQUVELE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxnQ0FBWTs7OztJQUFaLFVBQWEsTUFBTTtRQUNmLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUUsVUFBUyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQTNGRCxJQTJGQzs7OztJQXhGSSxnQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsRmFjdG9yeSB9IGZyb20gJy4vbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuL3NlcmlhbGl6YWJsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IE1vZGVscyB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIE1vZGVsLCBTZXJpYWxpemFibGUge1xuXG5cbiAgICAgcHVibGljIG1vZGVsQ29uZmlnID0ge1xuICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgIHVyaTogJycsXG4gICAgICAgICBoaWRkZW46IFtdLFxuICAgICAgICAgcmVsYXRpb25zaGlwczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICB0aGlzLm1vZGVsQ29uZmlnID0gey4uLnRoaXMuZ2V0Q29uZmlnKCksIC4uLmNvbmZpZ307XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZztcbiAgICB9XG5cbiAgICBnZXRVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaTtcbiAgICB9XG5cbiAgICBnZXRTZWxmVXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy51cmkgKyAnLycgKyB0aGlzW3RoaXMubW9kZWxDb25maWcua2V5XTtcbiAgICB9XG5cbiAgICBzZXRVcmkodXJpKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcudXJpID0gdXJpO1xuICAgIH1cblxuICAgIGdldEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcua2V5O1xuICAgIH1cblxuICAgIGdldFJlbGF0aW9uc2hpcChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcucmVsYXRpb25zaGlwc1trZXldO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGlucHV0KSB7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvcCBpbiBpbnB1dCkge1xuICAgICAgICAgICAgaWYoISBpbnB1dC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjb25maWcuaGlkZGVuLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0eXBlb2YgaW5wdXRbcHJvcF0gPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBpZihjb25maWcucmVsYXRpb25zaGlwcy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKGlucHV0W3Byb3BdID8gaW5wdXRbcHJvcF0uZGF0YSA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzW3RoaXMuc25ha2VUb0NhbWVsKHByb3ApXSA9IGlucHV0W3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCByZWxhdGlvbnNoaXAgb2YgcmVsYXRpb25zaGlwcykge1xuXG4gICAgICAgICAgICBpZihyZWxhdGlvbnNoaXAudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcENvbmZpZyA9IGNvbmZpZy5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uc2hpcC5rZXldO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRlZCA9IE1vZGVscy5nZXQocmVsYXRpb25zaGlwQ29uZmlnLm1vZGVsKTtcblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcE9iamVjdCA9IG5ldyBSZWxhdGlvbnNoaXAodGhpcywgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzW3JlbGF0aW9uc2hpcC5rZXldID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkRnJvbVJlbGF0aW9uc2hpcChyZWxhdGlvbnNoaXBPYmplY3QsIHJlbGF0aW9uc2hpcC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbmFrZVRvQ2FtZWwoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvX1xcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=