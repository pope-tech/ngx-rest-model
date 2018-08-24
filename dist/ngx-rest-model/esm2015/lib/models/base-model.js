/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @param {?} input
     * @return {?}
     */
    deserialize(input) {
        /** @type {?} */
        let config = this.getConfig();
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
                if (config.relationships.hasOwnProperty(this.snakeToCamel(prop))) {
                    relationships.push({
                        key: this.snakeToCamel(prop),
                        value: (input[prop] ? input[prop].data : null)
                    });
                }
                continue;
            }
            this[this.snakeToCamel(prop)] = input[prop];
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
            let relationshipObject = new Relationship(this, related, relationshipConfig.type);
            this[relationship.key] = ModelFactory.makeRelatedFromRelationship(relationshipObject, relationship.value);
        }
        return this;
    }
    /**
     * @param {?} string
     * @return {?}
     */
    snakeToCamel(string) {
        return string.replace(/_\w/g, function (m) {
            return m[1].toUpperCase();
        });
    }
}
if (false) {
    /** @type {?} */
    BaseModel.prototype.modelConfig;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE1BQU07SUFVRjsyQkFQc0I7WUFDakIsR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsRUFBRTtZQUNQLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLEVBQUU7U0FDckI7S0FFZTs7Ozs7SUFFaEIsU0FBUyxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsV0FBVyxxQkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUssTUFBTSxDQUFDLENBQUM7S0FDdkQ7Ozs7SUFFRCxTQUFTO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDM0I7Ozs7SUFFRCxNQUFNO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0tBQy9COzs7O0lBRUQsVUFBVTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEU7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQUc7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDOUI7Ozs7SUFFRCxNQUFNO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0tBQy9COzs7OztJQUVELGVBQWUsQ0FBQyxHQUFHO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFLOztRQUViLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7UUFDOUIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEIsRUFBRSxDQUFBLENBQUMsQ0FBRSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsUUFBUSxDQUFDO2FBQ1o7WUFFRCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLFFBQVEsQ0FBQzthQUNaO1lBRUQsRUFBRSxDQUFBLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFFakMsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUQsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQzVCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3FCQUNqRCxDQUFDLENBQUM7aUJBQ047Z0JBRUQsUUFBUSxDQUFDO2FBQ1o7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQztRQUVELEdBQUcsQ0FBQSxDQUFDLElBQUksWUFBWSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFFcEMsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixRQUFRLENBQUM7YUFDWjs7WUFFRCxJQUFJLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVoRSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUVuRCxJQUFJLGtCQUFrQixHQUFHLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdHO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmOzs7OztJQUVELFlBQVksQ0FBQyxNQUFNO1FBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVMsQ0FBQztZQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNOO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgUmVsYXRpb25zaGlwIH0gZnJvbSAnLi9yZWxhdGlvbnNoaXAnO1xuaW1wb3J0IHsgU2VyaWFsaXphYmxlIH0gZnJvbSAnLi9zZXJpYWxpemFibGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbC5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBNb2RlbCwgU2VyaWFsaXphYmxlIHtcblxuXG4gICAgIHB1YmxpYyBtb2RlbENvbmZpZyA9IHtcbiAgICAgICAgIGtleTogJycsXG4gICAgICAgICB1cmk6ICcnLFxuICAgICAgICAgaGlkZGVuOiBbXSxcbiAgICAgICAgIHJlbGF0aW9uc2hpcHM6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgdGhpcy5tb2RlbENvbmZpZyA9IHsuLi50aGlzLmdldENvbmZpZygpLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWc7XG4gICAgfVxuXG4gICAgZ2V0VXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy51cmk7XG4gICAgfVxuXG4gICAgZ2V0U2VsZlVyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcudXJpICsgJy8nICsgdGhpc1t0aGlzLm1vZGVsQ29uZmlnLmtleV07XG4gICAgfVxuXG4gICAgc2V0VXJpKHVyaSkge1xuICAgICAgICB0aGlzLm1vZGVsQ29uZmlnLnVyaSA9IHVyaTtcbiAgICB9XG5cbiAgICBnZXRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGlvbnNoaXAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnJlbGF0aW9uc2hpcHNba2V5XTtcbiAgICB9XG5cbiAgICBkZXNlcmlhbGl6ZShpbnB1dCkge1xuXG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgICAgICBsZXQgcmVsYXRpb25zaGlwcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHByb3AgaW4gaW5wdXQpIHtcbiAgICAgICAgICAgIGlmKCEgaW5wdXQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY29uZmlnLmhpZGRlbi5pbmRleE9mKHByb3ApID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodHlwZW9mIGlucHV0W3Byb3BdID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgICAgICAgICAgaWYoY29uZmlnLnJlbGF0aW9uc2hpcHMuaGFzT3duUHJvcGVydHkodGhpcy5zbmFrZVRvQ2FtZWwocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uc2hpcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc25ha2VUb0NhbWVsKHByb3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChpbnB1dFtwcm9wXSA/IGlucHV0W3Byb3BdLmRhdGEgOiBudWxsKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpc1t0aGlzLnNuYWtlVG9DYW1lbChwcm9wKV0gPSBpbnB1dFtwcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgcmVsYXRpb25zaGlwIG9mIHJlbGF0aW9uc2hpcHMpIHtcblxuICAgICAgICAgICAgaWYocmVsYXRpb25zaGlwLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZWxhdGlvbnNoaXBDb25maWcgPSBjb25maWcucmVsYXRpb25zaGlwc1tyZWxhdGlvbnNoaXAua2V5XTtcblxuICAgICAgICAgICAgbGV0IHJlbGF0ZWQgPSBNb2RlbHMuZ2V0KHJlbGF0aW9uc2hpcENvbmZpZy5tb2RlbCk7XG5cbiAgICAgICAgICAgIGxldCByZWxhdGlvbnNoaXBPYmplY3QgPSBuZXcgUmVsYXRpb25zaGlwKHRoaXMsIHJlbGF0ZWQsIHJlbGF0aW9uc2hpcENvbmZpZy50eXBlKTtcblxuICAgICAgICAgICAgdGhpc1tyZWxhdGlvbnNoaXAua2V5XSA9IE1vZGVsRmFjdG9yeS5tYWtlUmVsYXRlZEZyb21SZWxhdGlvbnNoaXAocmVsYXRpb25zaGlwT2JqZWN0LCByZWxhdGlvbnNoaXAudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc25ha2VUb0NhbWVsKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL19cXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgcmV0dXJuIG1bMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19