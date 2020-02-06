import { BaseModel } from './base-model';
var Relationship = /** @class */ (function () {
    function Relationship(model, related, type) {
        this.model = model;
        this.related = related;
        this.type = type;
    }
    Relationship.prototype.setRelated = function (related) {
        this.related = related;
    };
    Relationship.prototype.getRelated = function () {
        return this.related;
    };
    Relationship.prototype.setModel = function (model) {
        this.model = model;
    };
    Relationship.prototype.create = function () {
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
    Relationship.prototype.getModel = function () {
    };
    Relationship.prototype.getUri = function () {
    };
    return Relationship;
}());
export { Relationship };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpb25zaGlwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9yZWxhdGlvbnNoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQUVJLHNCQUFzQixLQUFLLEVBQVksT0FBTyxFQUFZLElBQUk7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBQTtRQUFZLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFBO0lBQUcsQ0FBQztJQUVsRSxpQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0ksMkNBQTJDO1FBQzNDLHNCQUFzQjtRQUN0QixJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDckM7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMzRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLW1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uc2hpcCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbW9kZWwsIHByb3RlY3RlZCByZWxhdGVkLCBwcm90ZWN0ZWQgdHlwZSkge31cblxuICAgIHNldFJlbGF0ZWQocmVsYXRlZCkge1xuICAgICAgICB0aGlzLnJlbGF0ZWQgPSByZWxhdGVkO1xuICAgIH1cblxuICAgIGdldFJlbGF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgfVxuXG4gICAgc2V0TW9kZWwobW9kZWwpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gaWYgdGhlIHJlbGF0ZWQgbW9kZWwgaXNuJ3QgaW5zdGFudGlhdGVkLFxuICAgICAgICAvLyBpbnN0YW50aWF0ZSBpdCBoZXJlXG4gICAgICAgIGlmKCAhICh0aGlzLnJlbGF0ZWQgaW5zdGFuY2VvZiBCYXNlTW9kZWwpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWQgPSBuZXcgdGhpcy5yZWxhdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gJ2hhc01hbnknIHx8IHRoaXMudHlwZSA9PSAnaGFzT25lJykge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkLnNldFVyaSh0aGlzLm1vZGVsLmdldFNlbGZVcmkoKSArICcvJyArIHRoaXMucmVsYXRlZC5nZXRVcmkoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50eXBlID09ICdiZWxvbmdzVG8nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kZWwoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRVcmkoKSB7XG5cbiAgICB9XG59Il19