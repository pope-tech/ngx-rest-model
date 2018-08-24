import { InjectionToken, Inject, Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import { __assign, __values } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CONFIG = new InjectionToken('config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ApiService = /** @class */ (function () {
    function ApiService(http, config) {
        this.http = http;
        /** @type {?} */
        var root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.setBaseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.baseUrl = url;
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getBaseUrl = /**
     * @return {?}
     */
    function () {
        return this.baseUrl;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.setApiRoot = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.apiRoot = url;
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getApiRoot = /**
     * @return {?}
     */
    function () {
        return this.apiRoot;
    };
    /**
     * @param {?} uri
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.getUrl = /**
     * @param {?} uri
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    };
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.get = /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    };
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @param {?=} options
     * @return {?}
     */
    ApiService.prototype.post = /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @param {?=} options
     * @return {?}
     */
    function (uri, payload, bypassPrefix, options) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    };
    /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.put = /**
     * @param {?} uri
     * @param {?} payload
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, payload, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    };
    /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    ApiService.prototype.delete = /**
     * @param {?} uri
     * @param {?=} options
     * @param {?=} bypassPrefix
     * @return {?}
     */
    function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        /** @type {?} */
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    };
    ApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] }
    ]; };
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Models = /** @class */ (function () {
    function Models() {
    }
    /**
     * @param {?} model
     * @return {?}
     */
    Models.add = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        /** @type {?} */
        var modelName = new model().constructor.name.toLowerCase();
        if (!Models.models[modelName]) {
            Models.models[modelName] = model;
        }
    };
    /**
     * @param {?} model
     * @return {?}
     */
    Models.get = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        return Models.models[model];
    };
    Models.models = {};
    return Models;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BaseModel = /** @class */ (function () {
    function BaseModel() {
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
    BaseModel.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.modelConfig = __assign({}, this.getConfig(), config);
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.modelConfig;
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getUri = /**
     * @return {?}
     */
    function () {
        return this.modelConfig.uri;
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getSelfUri = /**
     * @return {?}
     */
    function () {
        return this.modelConfig.uri + '/' + this[this.modelConfig.key];
    };
    /**
     * @param {?} uri
     * @return {?}
     */
    BaseModel.prototype.setUri = /**
     * @param {?} uri
     * @return {?}
     */
    function (uri) {
        this.modelConfig.uri = uri;
    };
    /**
     * @return {?}
     */
    BaseModel.prototype.getKey = /**
     * @return {?}
     */
    function () {
        return this.modelConfig.key;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    BaseModel.prototype.getRelationship = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.modelConfig.relationships[key];
    };
    /**
     * @param {?} input
     * @return {?}
     */
    BaseModel.prototype.deserialize = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        /** @type {?} */
        var config = this.getConfig();
        /** @type {?} */
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
                /** @type {?} */
                var relationshipConfig = config.relationships[relationship.key];
                /** @type {?} */
                var related = Models.get(relationshipConfig.model);
                /** @type {?} */
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
        var e_1, _a;
    };
    /**
     * @param {?} string
     * @return {?}
     */
    BaseModel.prototype.snakeToCamel = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        return string.replace(/_\w/g, function (m) {
            return m[1].toUpperCase();
        });
    };
    return BaseModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Relationship = /** @class */ (function () {
    function Relationship(model, related, type) {
        this.model = model;
        this.related = related;
        this.type = type;
    }
    /**
     * @param {?} related
     * @return {?}
     */
    Relationship.prototype.setRelated = /**
     * @param {?} related
     * @return {?}
     */
    function (related) {
        this.related = related;
    };
    /**
     * @return {?}
     */
    Relationship.prototype.getRelated = /**
     * @return {?}
     */
    function () {
        return this.related;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    Relationship.prototype.setModel = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
    };
    /**
     * @return {?}
     */
    Relationship.prototype.create = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    Relationship.prototype.getModel = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    Relationship.prototype.getUri = /**
     * @return {?}
     */
    function () {
    };
    return Relationship;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ModelFactory = /** @class */ (function () {
    function ModelFactory() {
    }
    /**
     * @param {?} model
     * @param {?} data
     * @return {?}
     */
    ModelFactory.make = /**
     * @param {?} model
     * @param {?} data
     * @return {?}
     */
    function (model, data) {
        return new model().deserialize(data);
    };
    /**
     * @param {?} model
     * @param {?} array
     * @return {?}
     */
    ModelFactory.makeFromArray = /**
     * @param {?} model
     * @param {?} array
     * @return {?}
     */
    function (model, array) {
        /** @type {?} */
        var models = [];
        for (var ii = 0; ii < array.length; ++ii) {
            models.push(new model().deserialize(array[ii]));
        }
        return models;
    };
    /**
     * @param {?} model
     * @param {?} related
     * @param {?} key
     * @return {?}
     */
    ModelFactory.makeRelated = /**
     * @param {?} model
     * @param {?} related
     * @param {?} key
     * @return {?}
     */
    function (model, related, key) {
        /** @type {?} */
        var relationshipConfig = model.getRelationship(key);
        /** @type {?} */
        var relationship = new Relationship(model, related, relationshipConfig.type);
        model[key] = relationship.create();
        model.setUri(model[key].getSelfUri() + '/' + model.getUri());
        return model;
    };
    /**
     * @param {?} relationship
     * @param {?} input
     * @return {?}
     */
    ModelFactory.makeRelatedFromRelationship = /**
     * @param {?} relationship
     * @param {?} input
     * @return {?}
     */
    function (relationship, input) {
        if (relationship.type == 'hasOne' || relationship.type == 'belongsTo') {
            return relationship.create().deserialize(input);
        }
        else if (relationship.type == 'hasMany') {
            /** @type {?} */
            var related = relationship.getRelated();
            // let constructor = Models.get(related.key);
            return ModelFactory.makeFromArray(related, input);
        }
    };
    return ModelFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BackendService = /** @class */ (function () {
    function BackendService(api) {
        this.api = api;
    }
    // set model
    /**
     * @param {?} model
     * @return {?}
     */
    BackendService.prototype.setModel = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BackendService.prototype.find = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        /** @type {?} */
        var constructor = Models.get(this.model.key);
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map(function (client) {
            client.data = ModelFactory.make(Models.get(_this.model.key), client.data);
            return client;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.save = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data[data.getKey()]) {
            return this.update(data);
        }
        return this.createNew(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.update = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var payload = data.serialize();
        return this.api.put(data.getUri() + '/' + data[data.getKey()], payload);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.createNew = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var payload = data.serialize();
        return this.api.post(data.getUri(), payload);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BackendService.prototype.destroy = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.api.delete(data.getUri() + '/' + data[data.getKey()]);
    };
    /**
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    BackendService.prototype.get = /**
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    function (model, options) {
        var _this = this;
        if (model === void 0) { model = null; }
        if (options === void 0) { options = { page: 1 }; }
        /** @type {?} */
        var requestOptions = {
            params: new HttpParams()
        };
        if (options.page != 1) {
            requestOptions.params = new HttpParams().set('page', String(options.page));
        }
        /** @type {?} */
        var observable;
        if (model === null) {
            observable = this.api.get(new this.model().getUri(), requestOptions);
        }
        else {
            observable = this.api.get(model.getUri(), requestOptions);
        }
        observable = observable.map(function (response) {
            /** @type {?} */
            var data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(_this.model.key), data);
            return response;
        });
        return observable;
    };
    /**
     * @param {?} related
     * @param {?} key
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    BackendService.prototype.getRelated = /**
     * @param {?} related
     * @param {?} key
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    function (related, key, model, options) {
        if (model === void 0) { model = null; }
        if (options === void 0) { options = {}; }
        if (model == null) {
            model = this.model;
        }
        /** @type {?} */
        var constructor = Models.get(model.key);
        model = ModelFactory.makeRelated(new constructor(), related, key);
        return this.get(model);
    };
    BackendService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BackendService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    return BackendService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxRestModelModule = /** @class */ (function () {
    function NgxRestModelModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgxRestModelModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    };
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
    return NgxRestModelModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxRestModelModule, BaseModel, Relationship, ApiService, BackendService, Models, ModelFactory, CONFIG as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXJlc3QtbW9kZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvY29uc3RhbnRzLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYXBpLnNlcnZpY2UudHMiLCJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvbW9kZWxzL21vZGVscy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvcmVsYXRpb25zaGlwLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdjb25maWcnKTtcbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBpUm9vdDogc3RyaW5nO1xuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQ09ORklHKSBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvbmZpZy5hcGlfcm9vdDtcblxuICAgICAgICB0aGlzLnNldEJhc2VVcmwocm9vdCk7XG4gICAgICAgIHRoaXMuc2V0QXBpUm9vdChyb290KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFwaVJvb3QodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlSb290ID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcGlSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlSb290O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYoICEgYnlwYXNzUHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnLycgKyB1cmk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlSb290KCkgKyAnLycgKyB1cmk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSwgb3B0aW9ucyA9IHt9KTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1vZGVscyB7XG5cbiAgICBzdGF0aWMgbW9kZWxzID0ge307XG5cbiAgICBzdGF0aWMgYWRkKG1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbE5hbWUgPSBuZXcgbW9kZWwoKS5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKCFNb2RlbHMubW9kZWxzW21vZGVsTmFtZV0pIHtcbiAgICAgICAgICAgIE1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChtb2RlbCkge1xuICAgICAgICByZXR1cm4gTW9kZWxzLm1vZGVsc1ttb2RlbF07XG4gICAgfVxufSIsImltcG9ydCB7IE1vZGVsRmFjdG9yeSB9IGZyb20gJy4vbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuL3NlcmlhbGl6YWJsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IE1vZGVscyB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIE1vZGVsLCBTZXJpYWxpemFibGUge1xuXG5cbiAgICAgcHVibGljIG1vZGVsQ29uZmlnID0ge1xuICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgIHVyaTogJycsXG4gICAgICAgICBoaWRkZW46IFtdLFxuICAgICAgICAgcmVsYXRpb25zaGlwczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICB0aGlzLm1vZGVsQ29uZmlnID0gey4uLnRoaXMuZ2V0Q29uZmlnKCksIC4uLmNvbmZpZ307XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZztcbiAgICB9XG5cbiAgICBnZXRVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaTtcbiAgICB9XG5cbiAgICBnZXRTZWxmVXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy51cmkgKyAnLycgKyB0aGlzW3RoaXMubW9kZWxDb25maWcua2V5XTtcbiAgICB9XG5cbiAgICBzZXRVcmkodXJpKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcudXJpID0gdXJpO1xuICAgIH1cblxuICAgIGdldEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcua2V5O1xuICAgIH1cblxuICAgIGdldFJlbGF0aW9uc2hpcChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcucmVsYXRpb25zaGlwc1trZXldO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGlucHV0KSB7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvcCBpbiBpbnB1dCkge1xuICAgICAgICAgICAgaWYoISBpbnB1dC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjb25maWcuaGlkZGVuLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0eXBlb2YgaW5wdXRbcHJvcF0gPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBpZihjb25maWcucmVsYXRpb25zaGlwcy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKGlucHV0W3Byb3BdID8gaW5wdXRbcHJvcF0uZGF0YSA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzW3RoaXMuc25ha2VUb0NhbWVsKHByb3ApXSA9IGlucHV0W3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCByZWxhdGlvbnNoaXAgb2YgcmVsYXRpb25zaGlwcykge1xuXG4gICAgICAgICAgICBpZihyZWxhdGlvbnNoaXAudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcENvbmZpZyA9IGNvbmZpZy5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uc2hpcC5rZXldO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRlZCA9IE1vZGVscy5nZXQocmVsYXRpb25zaGlwQ29uZmlnLm1vZGVsKTtcblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcE9iamVjdCA9IG5ldyBSZWxhdGlvbnNoaXAodGhpcywgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzW3JlbGF0aW9uc2hpcC5rZXldID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkRnJvbVJlbGF0aW9uc2hpcChyZWxhdGlvbnNoaXBPYmplY3QsIHJlbGF0aW9uc2hpcC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbmFrZVRvQ2FtZWwoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvX1xcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUmVsYXRpb25zaGlwIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RlbCwgcHJvdGVjdGVkIHJlbGF0ZWQsIHByb3RlY3RlZCB0eXBlKSB7fVxuXG4gICAgc2V0UmVsYXRlZChyZWxhdGVkKSB7XG4gICAgICAgIHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICB9XG5cbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICAvLyBpZiB0aGUgcmVsYXRlZCBtb2RlbCBpc24ndCBpbnN0YW50aWF0ZWQsXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIGl0IGhlcmVcbiAgICAgICAgaWYoICEgKHRoaXMucmVsYXRlZCBpbnN0YW5jZW9mIEJhc2VNb2RlbCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZCA9IG5ldyB0aGlzLnJlbGF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAnaGFzTWFueScgfHwgdGhpcy50eXBlID09ICdoYXNPbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWQuc2V0VXJpKHRoaXMubW9kZWwuZ2V0U2VsZlVyaSgpICsgJy8nICsgdGhpcy5yZWxhdGVkLmdldFVyaSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlbCgpIHtcblxuICAgIH1cblxuICAgIGdldFVyaSgpIHtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGVsRmFjdG9yeSB7XG5cbiAgICBzdGF0aWMgbWFrZShtb2RlbCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IG1vZGVsKCkuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VGcm9tQXJyYXkobW9kZWwsIGFycmF5KSB7XG4gICAgICAgIGxldCBtb2RlbHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpaSA9IDA7IGlpIDwgYXJyYXkubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgICAgICBtb2RlbHMucHVzaChuZXcgbW9kZWwoKS5kZXNlcmlhbGl6ZShhcnJheVtpaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlUmVsYXRlZChtb2RlbCwgcmVsYXRlZCwga2V5KSB7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBDb25maWcgPSBtb2RlbC5nZXRSZWxhdGlvbnNoaXAoa2V5KTtcblxuICAgICAgICBsZXQgcmVsYXRpb25zaGlwID0gbmV3IFJlbGF0aW9uc2hpcChtb2RlbCwgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgIG1vZGVsW2tleV0gPSByZWxhdGlvbnNoaXAuY3JlYXRlKCk7XG5cbiAgICAgICAgbW9kZWwuc2V0VXJpKG1vZGVsW2tleV0uZ2V0U2VsZlVyaSgpICsgJy8nICsgbW9kZWwuZ2V0VXJpKCkpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZVJlbGF0ZWRGcm9tUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcCwgaW5wdXQpIHtcbiAgICAgICAgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc09uZScgfHwgcmVsYXRpb25zaGlwLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiByZWxhdGlvbnNoaXAuY3JlYXRlKCkuZGVzZXJpYWxpemUoaW5wdXQpO1xuICAgICAgICB9IGVsc2UgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc01hbnknKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVkID0gcmVsYXRpb25zaGlwLmdldFJlbGF0ZWQoKTtcbiAgICAgICAgICAgIC8vIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQocmVsYXRlZC5rZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KHJlbGF0ZWQsIGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSBcIi4uL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cblxuICAgIHByb3RlY3RlZCBtb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcGk6IEFwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICAvLyBzZXQgbW9kZWxcbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgZmluZChpZCkge1xuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldChuZXcgY29uc3RydWN0b3IoKS5nZXRVcmkoKSArICcvJyArIGlkKS5waXBlKG1hcChjbGllbnQgPT4ge1xuICAgICAgICAgICAgY2xpZW50LmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgY2xpZW50LmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNhdmUoZGF0YSkge1xuICAgICAgICBpZihkYXRhW2RhdGEuZ2V0S2V5KCldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTmV3KGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnB1dChkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucG9zdChkYXRhLmdldFVyaSgpLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmRlbGV0ZShkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSk7XG4gICAgfVxuXG4gICAgZ2V0KG1vZGVsID0gbnVsbCwgb3B0aW9uczogYW55ID0geyBwYWdlOiAxIH0pIHtcblxuXG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYob3B0aW9ucy5wYWdlICE9IDEpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdwYWdlJywgU3RyaW5nKG9wdGlvbnMucGFnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9ic2VydmFibGU7XG5cbiAgICAgICAgaWYobW9kZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobmV3IHRoaXMubW9kZWwoKS5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChtb2RlbC5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2YWJsZSA9IG9ic2VydmFibGUubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZUZyb21BcnJheShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH1cblxuICAgIGdldFJlbGF0ZWQocmVsYXRlZCwga2V5LCBtb2RlbCA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZihtb2RlbCA9PSBudWxsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KG1vZGVsLmtleSk7XG4gICAgICAgIG1vZGVsID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkKG5ldyBjb25zdHJ1Y3RvcigpLCByZWxhdGVkLCBrZXkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldChtb2RlbCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NPTkZJR30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBwcm92aWRlcnM6XG4gICAgW1xuICAgICAgICBBcGlTZXJ2aWNlLFxuICAgICAgICBCYWNrZW5kU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4UmVzdE1vZGVsTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmd4UmVzdE1vZGVsTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLElBQWEsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEs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