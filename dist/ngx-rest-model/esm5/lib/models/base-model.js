import { __assign, __values } from "tslib";
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
    BaseModel.prototype.setConfig = function (config) {
        this.modelConfig = __assign(__assign({}, this.getConfig()), config);
    };
    BaseModel.prototype.getConfig = function () {
        return this.modelConfig;
    };
    BaseModel.prototype.getUri = function () {
        return this.modelConfig.uri;
    };
    BaseModel.prototype.getSelfUri = function () {
        return this.modelConfig.uri + '/' + this[this.modelConfig.key];
    };
    BaseModel.prototype.setUri = function (uri) {
        this.modelConfig.uri = uri;
    };
    BaseModel.prototype.getKey = function () {
        return this.modelConfig.key;
    };
    BaseModel.prototype.getRelationship = function (key) {
        return this.modelConfig.relationships[key];
    };
    BaseModel.prototype.deserialize = function (input) {
        var e_1, _a;
        var config = this.getConfig();
        var relationships = [];
        for (var prop in input) {
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
        try {
            for (var relationships_1 = __values(relationships), relationships_1_1 = relationships_1.next(); !relationships_1_1.done; relationships_1_1 = relationships_1.next()) {
                var relationship = relationships_1_1.value;
                if (relationship.value === null) {
                    continue;
                }
                var relationshipConfig = config.relationships[relationship.key];
                var related = Models.get(relationshipConfig.model);
                var relationshipObject = new Relationship(this, related, relationshipConfig.type);
                this[relationship.key] = ModelFactory.makeRelatedFromRelationship(relationshipObject, relationship.value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (relationships_1_1 && !relationships_1_1.done && (_a = relationships_1.return)) _a.call(relationships_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    BaseModel.prototype.snakeToCamel = function (string) {
        return string.replace(/_\w/g, function (m) {
            return m[1].toUpperCase();
        });
    };
    return BaseModel;
}());
export { BaseModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDO0lBVUk7UUFQUSxnQkFBVyxHQUFHO1lBQ2pCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsR0FBRyxFQUFFLEVBQUU7WUFDUCxNQUFNLEVBQUUsRUFBRTtZQUNWLGFBQWEsRUFBRSxFQUFFO1NBQ3JCLENBQUM7SUFFYSxDQUFDO0lBRWhCLDZCQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxDQUFDLFdBQVcseUJBQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCwwQkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sR0FBRztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDaEMsQ0FBQztJQUVELG1DQUFlLEdBQWYsVUFBZ0IsR0FBRztRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFLOztRQUViLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDbkIsSUFBRyxDQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLFNBQVM7YUFDWjtZQUVELElBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pDLFNBQVM7YUFDWjtZQUVELElBQUcsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUVoQyxJQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDN0QsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQzVCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3FCQUNqRCxDQUFDLENBQUM7aUJBQ047Z0JBRUQsU0FBUzthQUNaO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7O1lBRUQsS0FBd0IsSUFBQSxrQkFBQSxTQUFBLGFBQWEsQ0FBQSw0Q0FBQSx1RUFBRTtnQkFBbkMsSUFBSSxZQUFZLDBCQUFBO2dCQUVoQixJQUFHLFlBQVksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUM1QixTQUFTO2lCQUNaO2dCQUVELElBQUksa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWhFLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRW5ELElBQUksa0JBQWtCLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdHOzs7Ozs7Ozs7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQVksR0FBWixVQUFhLE1BQU07UUFDZixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVMsQ0FBQztZQUNwQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUEzRkQsSUEyRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgUmVsYXRpb25zaGlwIH0gZnJvbSAnLi9yZWxhdGlvbnNoaXAnO1xuaW1wb3J0IHsgU2VyaWFsaXphYmxlIH0gZnJvbSAnLi9zZXJpYWxpemFibGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbC5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBNb2RlbCwgU2VyaWFsaXphYmxlIHtcblxuXG4gICAgIHB1YmxpYyBtb2RlbENvbmZpZyA9IHtcbiAgICAgICAgIGtleTogJycsXG4gICAgICAgICB1cmk6ICcnLFxuICAgICAgICAgaGlkZGVuOiBbXSxcbiAgICAgICAgIHJlbGF0aW9uc2hpcHM6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgdGhpcy5tb2RlbENvbmZpZyA9IHsuLi50aGlzLmdldENvbmZpZygpLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWc7XG4gICAgfVxuXG4gICAgZ2V0VXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy51cmk7XG4gICAgfVxuXG4gICAgZ2V0U2VsZlVyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcudXJpICsgJy8nICsgdGhpc1t0aGlzLm1vZGVsQ29uZmlnLmtleV07XG4gICAgfVxuXG4gICAgc2V0VXJpKHVyaSkge1xuICAgICAgICB0aGlzLm1vZGVsQ29uZmlnLnVyaSA9IHVyaTtcbiAgICB9XG5cbiAgICBnZXRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGlvbnNoaXAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnJlbGF0aW9uc2hpcHNba2V5XTtcbiAgICB9XG5cbiAgICBkZXNlcmlhbGl6ZShpbnB1dCkge1xuXG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgICAgICBsZXQgcmVsYXRpb25zaGlwcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHByb3AgaW4gaW5wdXQpIHtcbiAgICAgICAgICAgIGlmKCEgaW5wdXQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY29uZmlnLmhpZGRlbi5pbmRleE9mKHByb3ApID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodHlwZW9mIGlucHV0W3Byb3BdID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgICAgICAgICAgaWYoY29uZmlnLnJlbGF0aW9uc2hpcHMuaGFzT3duUHJvcGVydHkodGhpcy5zbmFrZVRvQ2FtZWwocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uc2hpcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc25ha2VUb0NhbWVsKHByb3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChpbnB1dFtwcm9wXSA/IGlucHV0W3Byb3BdLmRhdGEgOiBudWxsKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpc1t0aGlzLnNuYWtlVG9DYW1lbChwcm9wKV0gPSBpbnB1dFtwcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgcmVsYXRpb25zaGlwIG9mIHJlbGF0aW9uc2hpcHMpIHtcblxuICAgICAgICAgICAgaWYocmVsYXRpb25zaGlwLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZWxhdGlvbnNoaXBDb25maWcgPSBjb25maWcucmVsYXRpb25zaGlwc1tyZWxhdGlvbnNoaXAua2V5XTtcblxuICAgICAgICAgICAgbGV0IHJlbGF0ZWQgPSBNb2RlbHMuZ2V0KHJlbGF0aW9uc2hpcENvbmZpZy5tb2RlbCk7XG5cbiAgICAgICAgICAgIGxldCByZWxhdGlvbnNoaXBPYmplY3QgPSBuZXcgUmVsYXRpb25zaGlwKHRoaXMsIHJlbGF0ZWQsIHJlbGF0aW9uc2hpcENvbmZpZy50eXBlKTtcblxuICAgICAgICAgICAgdGhpc1tyZWxhdGlvbnNoaXAua2V5XSA9IE1vZGVsRmFjdG9yeS5tYWtlUmVsYXRlZEZyb21SZWxhdGlvbnNoaXAocmVsYXRpb25zaGlwT2JqZWN0LCByZWxhdGlvbnNoaXAudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc25ha2VUb0NhbWVsKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL19cXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgcmV0dXJuIG1bMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19