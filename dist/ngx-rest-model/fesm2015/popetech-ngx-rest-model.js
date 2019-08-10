import { InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONFIG = new InjectionToken('config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
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
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BackendService {
    /**
     * @param {?} api
     */
    constructor(api) {
        this.api = api;
    }
    // set model
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
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map((/**
         * @param {?} client
         * @return {?}
         */
        (client) => {
            client.data = ModelFactory.make(Models.get(this.model.key), client.data);
            return client;
        })));
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
        return observable.pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            let data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
            return response;
        })));
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
    { type: Injectable }
];
/** @nocollapse */
BackendService.ctorParameters = () => [
    { type: ApiService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            },] }
];

export { ApiService, BackendService, BaseModel, ModelFactory, Models, NgxRestModelModule, Relationship, CONFIG as ɵa };
//# sourceMappingURL=popetech-ngx-rest-model.js.map
