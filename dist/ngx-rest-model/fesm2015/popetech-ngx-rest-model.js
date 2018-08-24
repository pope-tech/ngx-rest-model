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
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map(client => {
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
        observable = observable.map(response => {
            /** @type {?} */
            let data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
            return response;
        });
        return observable;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXJlc3QtbW9kZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvY29uc3RhbnRzLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYXBpLnNlcnZpY2UudHMiLCJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvbW9kZWxzL21vZGVscy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvcmVsYXRpb25zaGlwLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdjb25maWcnKTtcbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBpUm9vdDogc3RyaW5nO1xuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQ09ORklHKSBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvbmZpZy5hcGlfcm9vdDtcblxuICAgICAgICB0aGlzLnNldEJhc2VVcmwocm9vdCk7XG4gICAgICAgIHRoaXMuc2V0QXBpUm9vdChyb290KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFwaVJvb3QodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlSb290ID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcGlSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlSb290O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYoICEgYnlwYXNzUHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnLycgKyB1cmk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlSb290KCkgKyAnLycgKyB1cmk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSwgb3B0aW9ucyA9IHt9KTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1vZGVscyB7XG5cbiAgICBzdGF0aWMgbW9kZWxzID0ge307XG5cbiAgICBzdGF0aWMgYWRkKG1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbE5hbWUgPSBuZXcgbW9kZWwoKS5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKCFNb2RlbHMubW9kZWxzW21vZGVsTmFtZV0pIHtcbiAgICAgICAgICAgIE1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChtb2RlbCkge1xuICAgICAgICByZXR1cm4gTW9kZWxzLm1vZGVsc1ttb2RlbF07XG4gICAgfVxufSIsImltcG9ydCB7IE1vZGVsRmFjdG9yeSB9IGZyb20gJy4vbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuL3NlcmlhbGl6YWJsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IE1vZGVscyB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIE1vZGVsLCBTZXJpYWxpemFibGUge1xuXG5cbiAgICAgcHVibGljIG1vZGVsQ29uZmlnID0ge1xuICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgIHVyaTogJycsXG4gICAgICAgICBoaWRkZW46IFtdLFxuICAgICAgICAgcmVsYXRpb25zaGlwczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICB0aGlzLm1vZGVsQ29uZmlnID0gey4uLnRoaXMuZ2V0Q29uZmlnKCksIC4uLmNvbmZpZ307XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZztcbiAgICB9XG5cbiAgICBnZXRVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaTtcbiAgICB9XG5cbiAgICBnZXRTZWxmVXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy51cmkgKyAnLycgKyB0aGlzW3RoaXMubW9kZWxDb25maWcua2V5XTtcbiAgICB9XG5cbiAgICBzZXRVcmkodXJpKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcudXJpID0gdXJpO1xuICAgIH1cblxuICAgIGdldEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcua2V5O1xuICAgIH1cblxuICAgIGdldFJlbGF0aW9uc2hpcChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcucmVsYXRpb25zaGlwc1trZXldO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGlucHV0KSB7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvcCBpbiBpbnB1dCkge1xuICAgICAgICAgICAgaWYoISBpbnB1dC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjb25maWcuaGlkZGVuLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0eXBlb2YgaW5wdXRbcHJvcF0gPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBpZihjb25maWcucmVsYXRpb25zaGlwcy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKGlucHV0W3Byb3BdID8gaW5wdXRbcHJvcF0uZGF0YSA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzW3RoaXMuc25ha2VUb0NhbWVsKHByb3ApXSA9IGlucHV0W3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCByZWxhdGlvbnNoaXAgb2YgcmVsYXRpb25zaGlwcykge1xuXG4gICAgICAgICAgICBpZihyZWxhdGlvbnNoaXAudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcENvbmZpZyA9IGNvbmZpZy5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uc2hpcC5rZXldO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRlZCA9IE1vZGVscy5nZXQocmVsYXRpb25zaGlwQ29uZmlnLm1vZGVsKTtcblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcE9iamVjdCA9IG5ldyBSZWxhdGlvbnNoaXAodGhpcywgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzW3JlbGF0aW9uc2hpcC5rZXldID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkRnJvbVJlbGF0aW9uc2hpcChyZWxhdGlvbnNoaXBPYmplY3QsIHJlbGF0aW9uc2hpcC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbmFrZVRvQ2FtZWwoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvX1xcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUmVsYXRpb25zaGlwIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RlbCwgcHJvdGVjdGVkIHJlbGF0ZWQsIHByb3RlY3RlZCB0eXBlKSB7fVxuXG4gICAgc2V0UmVsYXRlZChyZWxhdGVkKSB7XG4gICAgICAgIHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICB9XG5cbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICAvLyBpZiB0aGUgcmVsYXRlZCBtb2RlbCBpc24ndCBpbnN0YW50aWF0ZWQsXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIGl0IGhlcmVcbiAgICAgICAgaWYoICEgKHRoaXMucmVsYXRlZCBpbnN0YW5jZW9mIEJhc2VNb2RlbCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZCA9IG5ldyB0aGlzLnJlbGF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAnaGFzTWFueScgfHwgdGhpcy50eXBlID09ICdoYXNPbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWQuc2V0VXJpKHRoaXMubW9kZWwuZ2V0U2VsZlVyaSgpICsgJy8nICsgdGhpcy5yZWxhdGVkLmdldFVyaSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlbCgpIHtcblxuICAgIH1cblxuICAgIGdldFVyaSgpIHtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGVsRmFjdG9yeSB7XG5cbiAgICBzdGF0aWMgbWFrZShtb2RlbCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IG1vZGVsKCkuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VGcm9tQXJyYXkobW9kZWwsIGFycmF5KSB7XG4gICAgICAgIGxldCBtb2RlbHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpaSA9IDA7IGlpIDwgYXJyYXkubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgICAgICBtb2RlbHMucHVzaChuZXcgbW9kZWwoKS5kZXNlcmlhbGl6ZShhcnJheVtpaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlUmVsYXRlZChtb2RlbCwgcmVsYXRlZCwga2V5KSB7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBDb25maWcgPSBtb2RlbC5nZXRSZWxhdGlvbnNoaXAoa2V5KTtcblxuICAgICAgICBsZXQgcmVsYXRpb25zaGlwID0gbmV3IFJlbGF0aW9uc2hpcChtb2RlbCwgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgIG1vZGVsW2tleV0gPSByZWxhdGlvbnNoaXAuY3JlYXRlKCk7XG5cbiAgICAgICAgbW9kZWwuc2V0VXJpKG1vZGVsW2tleV0uZ2V0U2VsZlVyaSgpICsgJy8nICsgbW9kZWwuZ2V0VXJpKCkpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZVJlbGF0ZWRGcm9tUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcCwgaW5wdXQpIHtcbiAgICAgICAgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc09uZScgfHwgcmVsYXRpb25zaGlwLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiByZWxhdGlvbnNoaXAuY3JlYXRlKCkuZGVzZXJpYWxpemUoaW5wdXQpO1xuICAgICAgICB9IGVsc2UgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc01hbnknKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVkID0gcmVsYXRpb25zaGlwLmdldFJlbGF0ZWQoKTtcbiAgICAgICAgICAgIC8vIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQocmVsYXRlZC5rZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KHJlbGF0ZWQsIGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSBcIi4uL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cblxuICAgIHByb3RlY3RlZCBtb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcGk6IEFwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICAvLyBzZXQgbW9kZWxcbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgZmluZChpZCkge1xuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldChuZXcgY29uc3RydWN0b3IoKS5nZXRVcmkoKSArICcvJyArIGlkKS5waXBlKG1hcChjbGllbnQgPT4ge1xuICAgICAgICAgICAgY2xpZW50LmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgY2xpZW50LmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNhdmUoZGF0YSkge1xuICAgICAgICBpZihkYXRhW2RhdGEuZ2V0S2V5KCldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTmV3KGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnB1dChkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucG9zdChkYXRhLmdldFVyaSgpLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmRlbGV0ZShkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSk7XG4gICAgfVxuXG4gICAgZ2V0KG1vZGVsID0gbnVsbCwgb3B0aW9uczogYW55ID0geyBwYWdlOiAxIH0pIHtcblxuXG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYob3B0aW9ucy5wYWdlICE9IDEpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdwYWdlJywgU3RyaW5nKG9wdGlvbnMucGFnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9ic2VydmFibGU7XG5cbiAgICAgICAgaWYobW9kZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobmV3IHRoaXMubW9kZWwoKS5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChtb2RlbC5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2YWJsZSA9IG9ic2VydmFibGUubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZUZyb21BcnJheShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH1cblxuICAgIGdldFJlbGF0ZWQocmVsYXRlZCwga2V5LCBtb2RlbCA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZihtb2RlbCA9PSBudWxsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KG1vZGVsLmtleSk7XG4gICAgICAgIG1vZGVsID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkKG5ldyBjb25zdHJ1Y3RvcigpLCByZWxhdGVkLCBrZXkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldChtb2RlbCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NPTkZJR30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBwcm92aWRlcnM6XG4gICAgW1xuICAgICAgICBBcGlTZXJ2aWNlLFxuICAgICAgICBCYWNrZW5kU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4UmVzdE1vZGVsTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmd4UmVzdE1vZGVsTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUEsTUFBYSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDOzs7Ozs7QUNGbEQ7Ozs7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