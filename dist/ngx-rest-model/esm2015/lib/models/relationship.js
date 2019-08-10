/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseModel } from './base-model';
export class Relationship {
    /**
     * @param {?} model
     * @param {?} related
     * @param {?} type
     */
    constructor(model, related, type) {
        this.model = model;
        this.related = related;
        this.type = type;
    }
    /**
     * @param {?} related
     * @return {?}
     */
    setRelated(related) {
        this.related = related;
    }
    /**
     * @return {?}
     */
    getRelated() {
        return this.related;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    setModel(model) {
        this.model = model;
    }
    /**
     * @return {?}
     */
    create() {
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
    }
    /**
     * @return {?}
     */
    getModel() {
    }
    /**
     * @return {?}
     */
    getUri() {
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpb25zaGlwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9yZWxhdGlvbnNoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekMsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUVyQixZQUFzQixLQUFLLEVBQVksT0FBTyxFQUFZLElBQUk7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBQTtRQUFZLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFBO0lBQUcsQ0FBQzs7Ozs7SUFFbEUsVUFBVSxDQUFDLE9BQU87UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELE1BQU07UUFDRiwyQ0FBMkM7UUFDM0Msc0JBQXNCO1FBQ3RCLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBQyxPQUFPLFlBQVksU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNyQztRQUVELElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsTUFBTTtJQUVOLENBQUM7Q0FDSjs7Ozs7O0lBdENlLDZCQUFlOzs7OztJQUFFLCtCQUFpQjs7Ozs7SUFBRSw0QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4vYmFzZS1tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBSZWxhdGlvbnNoaXAge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGVsLCBwcm90ZWN0ZWQgcmVsYXRlZCwgcHJvdGVjdGVkIHR5cGUpIHt9XG5cbiAgICBzZXRSZWxhdGVkKHJlbGF0ZWQpIHtcbiAgICAgICAgdGhpcy5yZWxhdGVkID0gcmVsYXRlZDtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkO1xuICAgIH1cblxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZWxhdGVkIG1vZGVsIGlzbid0IGluc3RhbnRpYXRlZCxcbiAgICAgICAgLy8gaW5zdGFudGlhdGUgaXQgaGVyZVxuICAgICAgICBpZiggISAodGhpcy5yZWxhdGVkIGluc3RhbmNlb2YgQmFzZU1vZGVsKSkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkID0gbmV3IHRoaXMucmVsYXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50eXBlID09ICdoYXNNYW55JyB8fCB0aGlzLnR5cGUgPT0gJ2hhc09uZScpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZC5zZXRVcmkodGhpcy5tb2RlbC5nZXRTZWxmVXJpKCkgKyAnLycgKyB0aGlzLnJlbGF0ZWQuZ2V0VXJpKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAnYmVsb25nc1RvJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVsKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0VXJpKCkge1xuXG4gICAgfVxufSJdfQ==