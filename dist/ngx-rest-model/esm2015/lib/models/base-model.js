/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ModelFactory } from './model.factory';
import { Relationship } from './relationship';
import { Models } from './models';
export class BaseModel {
    constructor() {
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
    setConfig(config) {
        this.modelConfig = Object.assign({}, this.getConfig(), config);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.modelConfig;
    }
    /**
     * @return {?}
     */
    getUri() {
        return this.modelConfig.uri;
    }
    /**
     * @return {?}
     */
    getSelfUri() {
        return this.modelConfig.uri + '/' + this[this.modelConfig.key];
    }
    /**
     * @param {?} uri
     * @return {?}
     */
    setUri(uri) {
        this.modelConfig.uri = uri;
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.modelConfig.key;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getRelationship(key) {
        return this.modelConfig.relationships[key];
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} input
     * @return {THIS}
     */
    deserialize(input) {
        /** @type {?} */
        let config = (/** @type {?} */ (this)).getConfig();
        /** @type {?} */
        let relationships = [];
        for (let prop in input) {
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
        for (let relationship of relationships) {
            if (relationship.value === null) {
                continue;
            }
            /** @type {?} */
            let relationshipConfig = config.relationships[relationship.key];
            /** @type {?} */
            let related = Models.get(relationshipConfig.model);
            /** @type {?} */
            let relationshipObject = new Relationship((/** @type {?} */ (this)), related, relationshipConfig.type);
            (/** @type {?} */ (this))[relationship.key] = ModelFactory.makeRelatedFromRelationship(relationshipObject, relationship.value);
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} string
     * @return {?}
     */
    snakeToCamel(string) {
        return string.replace(/_\w/g, (/**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            return m[1].toUpperCase();
        }));
    }
}
if (false) {
    /** @type {?} */
    BaseModel.prototype.modelConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE1BQU0sT0FBTyxTQUFTO0lBVWxCO1FBUFEsZ0JBQVcsR0FBRztZQUNqQixHQUFHLEVBQUUsRUFBRTtZQUNQLEdBQUcsRUFBRSxFQUFFO1lBQ1AsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsRUFBRTtTQUNyQixDQUFDO0lBRWEsQ0FBQzs7Ozs7SUFFaEIsU0FBUyxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsV0FBVyxxQkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUssTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBRztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBRztRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFLOztZQUVULE1BQU0sR0FBRyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLEVBQUU7O1lBQ3pCLGFBQWEsR0FBRyxFQUFFO1FBQ3RCLEtBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ25CLElBQUcsQ0FBRSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixTQUFTO2FBQ1o7WUFFRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxTQUFTO2FBQ1o7WUFFRCxJQUFHLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFFaEMsSUFBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDN0QsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDZixHQUFHLEVBQUUsbUJBQUEsSUFBSSxFQUFBLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzt3QkFDNUIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7cUJBQ2pELENBQUMsQ0FBQztpQkFDTjtnQkFFRCxTQUFTO2FBQ1o7WUFFRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7UUFFRCxLQUFJLElBQUksWUFBWSxJQUFJLGFBQWEsRUFBRTtZQUVuQyxJQUFHLFlBQVksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUM1QixTQUFTO2FBQ1o7O2dCQUVHLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQzs7Z0JBRTNELE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQzs7Z0JBRTlDLGtCQUFrQixHQUFHLElBQUksWUFBWSxDQUFDLG1CQUFBLElBQUksRUFBQSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFFakYsbUJBQUEsSUFBSSxFQUFBLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0c7UUFFRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQU07UUFDZixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFFLFVBQVMsQ0FBQztZQUNwQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7O0lBeEZJLGdDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9tb2RlbC5mYWN0b3J5JztcbmltcG9ydCB7IFJlbGF0aW9uc2hpcCB9IGZyb20gJy4vcmVsYXRpb25zaGlwJztcbmltcG9ydCB7IFNlcmlhbGl6YWJsZSB9IGZyb20gJy4vc2VyaWFsaXphYmxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIGltcGxlbWVudHMgTW9kZWwsIFNlcmlhbGl6YWJsZSB7XG5cblxuICAgICBwdWJsaWMgbW9kZWxDb25maWcgPSB7XG4gICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgIGhpZGRlbjogW10sXG4gICAgICAgICByZWxhdGlvbnNoaXBzOiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcgPSB7Li4udGhpcy5nZXRDb25maWcoKSwgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnO1xuICAgIH1cblxuICAgIGdldFVyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcudXJpO1xuICAgIH1cblxuICAgIGdldFNlbGZVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaSArICcvJyArIHRoaXNbdGhpcy5tb2RlbENvbmZpZy5rZXldO1xuICAgIH1cblxuICAgIHNldFVyaSh1cmkpIHtcbiAgICAgICAgdGhpcy5tb2RlbENvbmZpZy51cmkgPSB1cmk7XG4gICAgfVxuXG4gICAgZ2V0S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRpb25zaGlwKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy5yZWxhdGlvbnNoaXBzW2tleV07XG4gICAgfVxuXG4gICAgZGVzZXJpYWxpemUoaW5wdXQpIHtcblxuICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9wIGluIGlucHV0KSB7XG4gICAgICAgICAgICBpZighIGlucHV0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNvbmZpZy5oaWRkZW4uaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiBpbnB1dFtwcm9wXSA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZy5yZWxhdGlvbnNoaXBzLmhhc093blByb3BlcnR5KHRoaXMuc25ha2VUb0NhbWVsKHByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGlvbnNoaXBzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoaW5wdXRbcHJvcF0gPyBpbnB1dFtwcm9wXS5kYXRhIDogbnVsbClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXNbdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCldID0gaW5wdXRbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IHJlbGF0aW9uc2hpcCBvZiByZWxhdGlvbnNoaXBzKSB7XG5cbiAgICAgICAgICAgIGlmKHJlbGF0aW9uc2hpcC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVsYXRpb25zaGlwQ29uZmlnID0gY29uZmlnLnJlbGF0aW9uc2hpcHNbcmVsYXRpb25zaGlwLmtleV07XG5cbiAgICAgICAgICAgIGxldCByZWxhdGVkID0gTW9kZWxzLmdldChyZWxhdGlvbnNoaXBDb25maWcubW9kZWwpO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRpb25zaGlwT2JqZWN0ID0gbmV3IFJlbGF0aW9uc2hpcCh0aGlzLCByZWxhdGVkLCByZWxhdGlvbnNoaXBDb25maWcudHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXNbcmVsYXRpb25zaGlwLmtleV0gPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWRGcm9tUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcE9iamVjdCwgcmVsYXRpb25zaGlwLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNuYWtlVG9DYW1lbChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==