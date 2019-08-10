/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseModel } from './base-model';
var Relationship = /** @class */ (function () {
    function Relationship(model, related, type) {
        this.model = model;
        this.related = related;
        this.type = type;
    }
    /**
     * @param {?} related
     * @return {?}
     */
    Relationship.prototype.setRelated = /**
     * @param {?} related
     * @return {?}
     */
    function (related) {
        this.related = related;
    };
    /**
     * @return {?}
     */
    Relationship.prototype.getRelated = /**
     * @return {?}
     */
    function () {
        return this.related;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    Relationship.prototype.setModel = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
    };
    /**
     * @return {?}
     */
    Relationship.prototype.create = /**
     * @return {?}
     */
    function () {
        // if the related model isn't instantiated,
        // instantiate it here
        if (!(this.related instanceof BaseModel)) {
            this.related = new this.related();
        }
        if (this.type == 'hasMany' || this.type == 'hasOne') {
            this.related.setUri(this.model.getSelfUri() + '/' + this.related.getUri());
            return this.related;
        }
        if (this.type == 'belongsTo') {
            return this.related;
        }
    };
    /**
     * @return {?}
     */
    Relationship.prototype.getModel = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Relationship.prototype.getUri = /**
     * @return {?}
     */
    function () {
    };
    return Relationship;
}());
export { Relationship };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    Relationship.prototype.model;
    /**
     * @type {?}
     * @protected
     */
    Relationship.prototype.related;
    /**
     * @type {?}
     * @protected
     */
    Relationship.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpb25zaGlwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9yZWxhdGlvbnNoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekM7SUFFSSxzQkFBc0IsS0FBSyxFQUFZLE9BQU8sRUFBWSxJQUFJO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQUE7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBQTtJQUFHLENBQUM7Ozs7O0lBRWxFLGlDQUFVOzs7O0lBQVYsVUFBVyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGlDQUFVOzs7SUFBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELCtCQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDZCQUFNOzs7SUFBTjtRQUNJLDJDQUEyQztRQUMzQyxzQkFBc0I7UUFDdEIsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sWUFBWSxTQUFTLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3JDO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDM0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7SUFDTCxDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO0lBRUEsQ0FBQzs7OztJQUVELDZCQUFNOzs7SUFBTjtJQUVBLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7Ozs7Ozs7SUF0Q2UsNkJBQWU7Ozs7O0lBQUUsK0JBQWlCOzs7OztJQUFFLDRCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLW1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uc2hpcCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbW9kZWwsIHByb3RlY3RlZCByZWxhdGVkLCBwcm90ZWN0ZWQgdHlwZSkge31cblxuICAgIHNldFJlbGF0ZWQocmVsYXRlZCkge1xuICAgICAgICB0aGlzLnJlbGF0ZWQgPSByZWxhdGVkO1xuICAgIH1cblxuICAgIGdldFJlbGF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgfVxuXG4gICAgc2V0TW9kZWwobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gaWYgdGhlIHJlbGF0ZWQgbW9kZWwgaXNuJ3QgaW5zdGFudGlhdGVkLFxuICAgICAgICAvLyBpbnN0YW50aWF0ZSBpdCBoZXJlXG4gICAgICAgIGlmKCAhICh0aGlzLnJlbGF0ZWQgaW5zdGFuY2VvZiBCYXNlTW9kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWQgPSBuZXcgdGhpcy5yZWxhdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gJ2hhc01hbnknIHx8IHRoaXMudHlwZSA9PSAnaGFzT25lJykge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkLnNldFVyaSh0aGlzLm1vZGVsLmdldFNlbGZVcmkoKSArICcvJyArIHRoaXMucmVsYXRlZC5nZXRVcmkoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50eXBlID09ICdiZWxvbmdzVG8nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kZWwoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRVcmkoKSB7XG5cbiAgICB9XG59Il19