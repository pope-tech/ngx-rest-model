import { InjectionToken, Inject, Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CONFIG = new InjectionToken('config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ApiService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        /** @type {?} */
        const root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    /**
     * @return {?}
     */
    getBaseUrl() {
        return this.baseUrl;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    setApiRoot(url) {
        this.apiRoot = url;
    }
    /**
     * @return {?}
     */
    getApiRoot() {
        return this.apiRoot;
    }
    /**
     * @param {?} uri
     * @param {?=} bypassPrefix
     * @return {?}
     */
    getUrl(uri, bypassPrefix = false) {
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    }
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    get(uri, options = {}, bypassPrefix = false) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    }
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @param {?=} options
     * @return {?}
     */
    post(uri, payload, bypassPrefix = false, options = {}) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    }
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @return {?}
     */
    put(uri, payload, bypassPrefix = false) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    }
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    delete(uri, options = {}, bypassPrefix = false) {
        /** @type {?} */
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    }
}
ApiService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Models {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BaseModel {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Relationship {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ModelFactory {
    /**
     * @param {?} model
     * @param {?} data
     * @return {?}
     */
    static make(model, data) {
        return new model().deserialize(data);
    }
    /**
     * @param {?} model
     * @param {?} array
     * @return {?}
     */
    static makeFromArray(model, array) {
        /** @type {?} */
        let models = [];
        for (let ii = 0; ii < array.length; ++ii) {
            models.push(new model().deserialize(array[ii]));
        }
        return models;
    }
    /**
     * @param {?} model
     * @param {?} related
     * @param {?} key
     * @return {?}
     */
    static makeRelated(model, related, key) {
        /** @type {?} */
        let relationshipConfig = model.getRelationship(key);
        /** @type {?} */
        let relationship = new Relationship(model, related, relationshipConfig.type);
        model[key] = relationship.create();
        model.setUri(model[key].getSelfUri() + '/' + model.getUri());
        return model;
    }
    /**
     * @param {?} relationship
     * @param {?} input
     * @return {?}
     */
    static makeRelatedFromRelationship(relationship, input) {
        if (relationship.type == 'hasOne' || relationship.type == 'belongsTo') {
            return relationship.create().deserialize(input);
        }
        else if (relationship.type == 'hasMany') {
            /** @type {?} */
            const related = relationship.getRelated();
            // let constructor = Models.get(related.key);
            return ModelFactory.makeFromArray(related, input);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BackendService {
    /**
     * @param {?} api
     */
    constructor(api) {
        this.api = api;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    setModel(model) {
        this.model = model;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    find(id) {
        /** @type {?} */
        let constructor = Models.get(this.model.key);
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map((client) => {
            client.data = ModelFactory.make(Models.get(this.model.key), client.data);
            return client;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    save(data) {
        if (data[data.getKey()]) {
            return this.update(data);
        }
        return this.createNew(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        /** @type {?} */
        let payload = data.serialize();
        return this.api.put(data.getUri() + '/' + data[data.getKey()], payload);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    createNew(data) {
        /** @type {?} */
        let payload = data.serialize();
        return this.api.post(data.getUri(), payload);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    destroy(data) {
        return this.api.delete(data.getUri() + '/' + data[data.getKey()]);
    }
    /**
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    get(model = null, options = { page: 1 }) {
        /** @type {?} */
        let requestOptions = {
            params: new HttpParams()
        };
        if (options.page != 1) {
            requestOptions.params = new HttpParams().set('page', String(options.page));
        }
        /** @type {?} */
        let observable;
        if (model === null) {
            observable = this.api.get(new this.model().getUri(), requestOptions);
        }
        else {
            observable = this.api.get(model.getUri(), requestOptions);
        }
        return observable.pipe(map((response) => {
            /** @type {?} */
            let data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
            return response;
        }));
    }
    /**
     * @param {?} related
     * @param {?} key
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    getRelated(related, key, model = null, options = {}) {
        if (model == null) {
            model = this.model;
        }
        /** @type {?} */
        let constructor = Models.get(model.key);
        model = ModelFactory.makeRelated(new constructor(), related, key);
        return this.get(model);
    }
}
BackendService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BackendService.ctorParameters = () => [
    { type: ApiService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxRestModelModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    }
}
NgxRestModelModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    ApiService,
                    BackendService
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxRestModelModule, BaseModel, Relationship, ApiService, BackendService, Models, ModelFactory, CONFIG as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXJlc3QtbW9kZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvY29uc3RhbnRzLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYXBpLnNlcnZpY2UudHMiLCJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvbW9kZWxzL21vZGVscy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvcmVsYXRpb25zaGlwLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdjb25maWcnKTtcbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBpUm9vdDogc3RyaW5nO1xuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQ09ORklHKSBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvbmZpZy5hcGlfcm9vdDtcblxuICAgICAgICB0aGlzLnNldEJhc2VVcmwocm9vdCk7XG4gICAgICAgIHRoaXMuc2V0QXBpUm9vdChyb290KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFwaVJvb3QodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlSb290ID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcGlSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlSb290O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYoICEgYnlwYXNzUHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnLycgKyB1cmk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlSb290KCkgKyAnLycgKyB1cmk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSwgb3B0aW9ucyA9IHt9KTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1vZGVscyB7XG5cbiAgICBzdGF0aWMgbW9kZWxzID0ge307XG5cbiAgICBzdGF0aWMgYWRkKG1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbE5hbWUgPSBuZXcgbW9kZWwoKS5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKCFNb2RlbHMubW9kZWxzW21vZGVsTmFtZV0pIHtcbiAgICAgICAgICAgIE1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChtb2RlbCkge1xuICAgICAgICByZXR1cm4gTW9kZWxzLm1vZGVsc1ttb2RlbF07XG4gICAgfVxufSIsImltcG9ydCB7IE1vZGVsRmFjdG9yeSB9IGZyb20gJy4vbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuL3NlcmlhbGl6YWJsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IE1vZGVscyB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIE1vZGVsLCBTZXJpYWxpemFibGUge1xuXG5cbiAgICAgcHVibGljIG1vZGVsQ29uZmlnID0ge1xuICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgIHVyaTogJycsXG4gICAgICAgICBoaWRkZW46IFtdLFxuICAgICAgICAgcmVsYXRpb25zaGlwczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICB0aGlzLm1vZGVsQ29uZmlnID0gey4uLnRoaXMuZ2V0Q29uZmlnKCksIC4uLmNvbmZpZ307XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZztcbiAgICB9XG5cbiAgICBnZXRVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaTtcbiAgICB9XG5cbiAgICBnZXRTZWxmVXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy51cmkgKyAnLycgKyB0aGlzW3RoaXMubW9kZWxDb25maWcua2V5XTtcbiAgICB9XG5cbiAgICBzZXRVcmkodXJpKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcudXJpID0gdXJpO1xuICAgIH1cblxuICAgIGdldEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcua2V5O1xuICAgIH1cblxuICAgIGdldFJlbGF0aW9uc2hpcChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcucmVsYXRpb25zaGlwc1trZXldO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGlucHV0KSB7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvcCBpbiBpbnB1dCkge1xuICAgICAgICAgICAgaWYoISBpbnB1dC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjb25maWcuaGlkZGVuLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0eXBlb2YgaW5wdXRbcHJvcF0gPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBpZihjb25maWcucmVsYXRpb25zaGlwcy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKGlucHV0W3Byb3BdID8gaW5wdXRbcHJvcF0uZGF0YSA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzW3RoaXMuc25ha2VUb0NhbWVsKHByb3ApXSA9IGlucHV0W3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCByZWxhdGlvbnNoaXAgb2YgcmVsYXRpb25zaGlwcykge1xuXG4gICAgICAgICAgICBpZihyZWxhdGlvbnNoaXAudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcENvbmZpZyA9IGNvbmZpZy5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uc2hpcC5rZXldO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRlZCA9IE1vZGVscy5nZXQocmVsYXRpb25zaGlwQ29uZmlnLm1vZGVsKTtcblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcE9iamVjdCA9IG5ldyBSZWxhdGlvbnNoaXAodGhpcywgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzW3JlbGF0aW9uc2hpcC5rZXldID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkRnJvbVJlbGF0aW9uc2hpcChyZWxhdGlvbnNoaXBPYmplY3QsIHJlbGF0aW9uc2hpcC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbmFrZVRvQ2FtZWwoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvX1xcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUmVsYXRpb25zaGlwIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RlbCwgcHJvdGVjdGVkIHJlbGF0ZWQsIHByb3RlY3RlZCB0eXBlKSB7fVxuXG4gICAgc2V0UmVsYXRlZChyZWxhdGVkKSB7XG4gICAgICAgIHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICB9XG5cbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICAvLyBpZiB0aGUgcmVsYXRlZCBtb2RlbCBpc24ndCBpbnN0YW50aWF0ZWQsXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIGl0IGhlcmVcbiAgICAgICAgaWYoICEgKHRoaXMucmVsYXRlZCBpbnN0YW5jZW9mIEJhc2VNb2RlbCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZCA9IG5ldyB0aGlzLnJlbGF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAnaGFzTWFueScgfHwgdGhpcy50eXBlID09ICdoYXNPbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWQuc2V0VXJpKHRoaXMubW9kZWwuZ2V0U2VsZlVyaSgpICsgJy8nICsgdGhpcy5yZWxhdGVkLmdldFVyaSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlbCgpIHtcblxuICAgIH1cblxuICAgIGdldFVyaSgpIHtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGVsRmFjdG9yeSB7XG5cbiAgICBzdGF0aWMgbWFrZShtb2RlbCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IG1vZGVsKCkuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VGcm9tQXJyYXkobW9kZWwsIGFycmF5KSB7XG4gICAgICAgIGxldCBtb2RlbHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpaSA9IDA7IGlpIDwgYXJyYXkubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgICAgICBtb2RlbHMucHVzaChuZXcgbW9kZWwoKS5kZXNlcmlhbGl6ZShhcnJheVtpaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlUmVsYXRlZChtb2RlbCwgcmVsYXRlZCwga2V5KSB7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBDb25maWcgPSBtb2RlbC5nZXRSZWxhdGlvbnNoaXAoa2V5KTtcblxuICAgICAgICBsZXQgcmVsYXRpb25zaGlwID0gbmV3IFJlbGF0aW9uc2hpcChtb2RlbCwgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgIG1vZGVsW2tleV0gPSByZWxhdGlvbnNoaXAuY3JlYXRlKCk7XG5cbiAgICAgICAgbW9kZWwuc2V0VXJpKG1vZGVsW2tleV0uZ2V0U2VsZlVyaSgpICsgJy8nICsgbW9kZWwuZ2V0VXJpKCkpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZVJlbGF0ZWRGcm9tUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcCwgaW5wdXQpIHtcbiAgICAgICAgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc09uZScgfHwgcmVsYXRpb25zaGlwLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiByZWxhdGlvbnNoaXAuY3JlYXRlKCkuZGVzZXJpYWxpemUoaW5wdXQpO1xuICAgICAgICB9IGVsc2UgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc01hbnknKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVkID0gcmVsYXRpb25zaGlwLmdldFJlbGF0ZWQoKTtcbiAgICAgICAgICAgIC8vIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQocmVsYXRlZC5rZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KHJlbGF0ZWQsIGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSBcIi4uL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cblxuICAgIHByb3RlY3RlZCBtb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcGk6IEFwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICAvLyBzZXQgbW9kZWxcbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgZmluZChpZCkge1xuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldChuZXcgY29uc3RydWN0b3IoKS5nZXRVcmkoKSArICcvJyArIGlkKS5waXBlKG1hcCgoY2xpZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNsaWVudC5kYXRhID0gTW9kZWxGYWN0b3J5Lm1ha2UoTW9kZWxzLmdldCh0aGlzLm1vZGVsLmtleSksIGNsaWVudC5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzYXZlKGRhdGEpIHtcbiAgICAgICAgaWYoZGF0YVtkYXRhLmdldEtleSgpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5ldyhkYXRhKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IGRhdGEuc2VyaWFsaXplKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5wdXQoZGF0YS5nZXRVcmkoKSArICcvJyArIGRhdGFbZGF0YS5nZXRLZXkoKV0sIHBheWxvYWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldyhkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QoZGF0YS5nZXRVcmkoKSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgZGVzdHJveShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5kZWxldGUoZGF0YS5nZXRVcmkoKSArICcvJyArIGRhdGFbZGF0YS5nZXRLZXkoKV0pO1xuICAgIH1cblxuICAgIGdldChtb2RlbCA9IG51bGwsIG9wdGlvbnM6IGFueSA9IHsgcGFnZTogMSB9KSB7XG5cblxuICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKG9wdGlvbnMucGFnZSAhPSAxKSB7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgncGFnZScsIFN0cmluZyhvcHRpb25zLnBhZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvYnNlcnZhYmxlO1xuXG4gICAgICAgIGlmKG1vZGVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdGhpcy5hcGkuZ2V0KG5ldyB0aGlzLm1vZGVsKCkuZ2V0VXJpKCksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobW9kZWwuZ2V0VXJpKCksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZChyZWxhdGVkLCBrZXksIG1vZGVsID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmKG1vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQobW9kZWwua2V5KTtcbiAgICAgICAgbW9kZWwgPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWQobmV3IGNvbnN0cnVjdG9yKCksIHJlbGF0ZWQsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1vZGVsKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7Q09ORklHfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczpcbiAgICBbXG4gICAgICAgIEFwaVNlcnZpY2UsXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hSZXN0TW9kZWxNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hSZXN0TW9kZWxNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFhLE1BQU0sR0FBRyxJQUFJLGNB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