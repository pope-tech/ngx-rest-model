export class Models {
    static { this.models = {}; }
    static add(model) {
        let modelName = new model().constructor.name.toLowerCase();
        if (!Models.models[modelName]) {
            Models.models[modelName] = model;
        }
    }
    static get(model) {
        return Models.models[model];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXJlc3QtbW9kZWwvc3JjL2xpYi9tb2RlbHMvbW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxNQUFNO2FBRVIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUVuQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUs7UUFDWixJQUFJLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0QsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSztRQUNaLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1vZGVscyB7XG5cbiAgICBzdGF0aWMgbW9kZWxzID0ge307XG5cbiAgICBzdGF0aWMgYWRkKG1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbE5hbWUgPSBuZXcgbW9kZWwoKS5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKCFNb2RlbHMubW9kZWxzW21vZGVsTmFtZV0pIHtcbiAgICAgICAgICAgIE1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChtb2RlbCkge1xuICAgICAgICByZXR1cm4gTW9kZWxzLm1vZGVsc1ttb2RlbF07XG4gICAgfVxufSJdfQ==