import { Relationship } from './relationship';
var ModelFactory = /** @class */ (function () {
    function ModelFactory() {
    }
    ModelFactory.make = function (model, data) {
        return new model().deserialize(data);
    };
    ModelFactory.makeFromArray = function (model, array) {
        var models = [];
        for (var ii = 0; ii < array.length; ++ii) {
            models.push(new model().deserialize(array[ii]));
        }
        return models;
    };
    ModelFactory.makeRelated = function (model, related, key) {
        var relationshipConfig = model.getRelationship(key);
        var relationship = new Relationship(model, related, relationshipConfig.type);
        model[key] = relationship.create();
        model.setUri(model[key].getSelfUri() + '/' + model.getUri());
        return model;
    };
    ModelFactory.makeRelatedFromRelationship = function (relationship, input) {
        if (relationship.type == 'hasOne' || relationship.type == 'belongsTo') {
            return relationship.create().deserialize(input);
        }
        else if (relationship.type == 'hasMany') {
            var related = relationship.getRelated();
            // let constructor = Models.get(related.key);
            return ModelFactory.makeFromArray(related, input);
        }
    };
    return ModelFactory;
}());
export { ModelFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbW9kZWwuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUM7SUFBQTtJQXFDQSxDQUFDO0lBbkNVLGlCQUFJLEdBQVgsVUFBWSxLQUFLLEVBQUUsSUFBSTtRQUNuQixPQUFPLElBQUksS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSwwQkFBYSxHQUFwQixVQUFxQixLQUFLLEVBQUUsS0FBSztRQUM3QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLHdCQUFXLEdBQWxCLFVBQW1CLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRztRQUNsQyxJQUFJLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5DLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU3RCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sd0NBQTJCLEdBQWxDLFVBQW1DLFlBQVksRUFBRSxLQUFLO1FBQ2xELElBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksWUFBWSxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDbEUsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBRyxZQUFZLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUN0QyxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUMsNkNBQTZDO1lBQzdDLE9BQU8sWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7SUFFTCxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVsYXRpb25zaGlwIH0gZnJvbSAnLi9yZWxhdGlvbnNoaXAnO1xuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbEZhY3Rvcnkge1xuXG4gICAgc3RhdGljIG1ha2UobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBtb2RlbCgpLmRlc2VyaWFsaXplKGRhdGEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlRnJvbUFycmF5KG1vZGVsLCBhcnJheSkge1xuICAgICAgICBsZXQgbW9kZWxzID0gW107XG4gICAgICAgIGZvcihsZXQgaWkgPSAwOyBpaSA8IGFycmF5Lmxlbmd0aDsgKytpaSkge1xuICAgICAgICAgICAgbW9kZWxzLnB1c2gobmV3IG1vZGVsKCkuZGVzZXJpYWxpemUoYXJyYXlbaWldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVscztcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZVJlbGF0ZWQobW9kZWwsIHJlbGF0ZWQsIGtleSkge1xuICAgICAgICBsZXQgcmVsYXRpb25zaGlwQ29uZmlnID0gbW9kZWwuZ2V0UmVsYXRpb25zaGlwKGtleSk7XG5cbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcCA9IG5ldyBSZWxhdGlvbnNoaXAobW9kZWwsIHJlbGF0ZWQsIHJlbGF0aW9uc2hpcENvbmZpZy50eXBlKTtcblxuICAgICAgICBtb2RlbFtrZXldID0gcmVsYXRpb25zaGlwLmNyZWF0ZSgpO1xuXG4gICAgICAgIG1vZGVsLnNldFVyaShtb2RlbFtrZXldLmdldFNlbGZVcmkoKSArICcvJyArIG1vZGVsLmdldFVyaSgpKTtcblxuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VSZWxhdGVkRnJvbVJlbGF0aW9uc2hpcChyZWxhdGlvbnNoaXAsIGlucHV0KSB7XG4gICAgICAgIGlmKHJlbGF0aW9uc2hpcC50eXBlID09ICdoYXNPbmUnIHx8IHJlbGF0aW9uc2hpcC50eXBlID09ICdiZWxvbmdzVG8nKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVsYXRpb25zaGlwLmNyZWF0ZSgpLmRlc2VyaWFsaXplKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIGlmKHJlbGF0aW9uc2hpcC50eXBlID09ICdoYXNNYW55Jykge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZCA9IHJlbGF0aW9uc2hpcC5nZXRSZWxhdGVkKCk7XG4gICAgICAgICAgICAvLyBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KHJlbGF0ZWQua2V5KTtcbiAgICAgICAgICAgIHJldHVybiBNb2RlbEZhY3RvcnkubWFrZUZyb21BcnJheShyZWxhdGVkLCBpbnB1dCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSJdfQ==