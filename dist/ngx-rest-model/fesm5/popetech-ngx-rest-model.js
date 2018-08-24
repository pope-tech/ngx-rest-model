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
        return observable.pipe(map(function (response) {
            /** @type {?} */
            var data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(_this.model.key), data);
            return response;
        }));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXJlc3QtbW9kZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvY29uc3RhbnRzLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYXBpLnNlcnZpY2UudHMiLCJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvbW9kZWxzL21vZGVscy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvcmVsYXRpb25zaGlwLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdjb25maWcnKTtcbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBpUm9vdDogc3RyaW5nO1xuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQ09ORklHKSBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvbmZpZy5hcGlfcm9vdDtcblxuICAgICAgICB0aGlzLnNldEJhc2VVcmwocm9vdCk7XG4gICAgICAgIHRoaXMuc2V0QXBpUm9vdChyb290KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFwaVJvb3QodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlSb290ID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcGlSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlSb290O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYoICEgYnlwYXNzUHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnLycgKyB1cmk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlSb290KCkgKyAnLycgKyB1cmk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSwgb3B0aW9ucyA9IHt9KTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1vZGVscyB7XG5cbiAgICBzdGF0aWMgbW9kZWxzID0ge307XG5cbiAgICBzdGF0aWMgYWRkKG1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbE5hbWUgPSBuZXcgbW9kZWwoKS5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmKCFNb2RlbHMubW9kZWxzW21vZGVsTmFtZV0pIHtcbiAgICAgICAgICAgIE1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldChtb2RlbCkge1xuICAgICAgICByZXR1cm4gTW9kZWxzLm1vZGVsc1ttb2RlbF07XG4gICAgfVxufSIsImltcG9ydCB7IE1vZGVsRmFjdG9yeSB9IGZyb20gJy4vbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBTZXJpYWxpemFibGUgfSBmcm9tICcuL3NlcmlhbGl6YWJsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IE1vZGVscyB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIE1vZGVsLCBTZXJpYWxpemFibGUge1xuXG5cbiAgICAgcHVibGljIG1vZGVsQ29uZmlnID0ge1xuICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgIHVyaTogJycsXG4gICAgICAgICBoaWRkZW46IFtdLFxuICAgICAgICAgcmVsYXRpb25zaGlwczoge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICB0aGlzLm1vZGVsQ29uZmlnID0gey4uLnRoaXMuZ2V0Q29uZmlnKCksIC4uLmNvbmZpZ307XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZztcbiAgICB9XG5cbiAgICBnZXRVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaTtcbiAgICB9XG5cbiAgICBnZXRTZWxmVXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy51cmkgKyAnLycgKyB0aGlzW3RoaXMubW9kZWxDb25maWcua2V5XTtcbiAgICB9XG5cbiAgICBzZXRVcmkodXJpKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcudXJpID0gdXJpO1xuICAgIH1cblxuICAgIGdldEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcua2V5O1xuICAgIH1cblxuICAgIGdldFJlbGF0aW9uc2hpcChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcucmVsYXRpb25zaGlwc1trZXldO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGlucHV0KSB7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvcCBpbiBpbnB1dCkge1xuICAgICAgICAgICAgaWYoISBpbnB1dC5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjb25maWcuaGlkZGVuLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0eXBlb2YgaW5wdXRbcHJvcF0gPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgICAgICBpZihjb25maWcucmVsYXRpb25zaGlwcy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKGlucHV0W3Byb3BdID8gaW5wdXRbcHJvcF0uZGF0YSA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzW3RoaXMuc25ha2VUb0NhbWVsKHByb3ApXSA9IGlucHV0W3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCByZWxhdGlvbnNoaXAgb2YgcmVsYXRpb25zaGlwcykge1xuXG4gICAgICAgICAgICBpZihyZWxhdGlvbnNoaXAudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcENvbmZpZyA9IGNvbmZpZy5yZWxhdGlvbnNoaXBzW3JlbGF0aW9uc2hpcC5rZXldO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRlZCA9IE1vZGVscy5nZXQocmVsYXRpb25zaGlwQ29uZmlnLm1vZGVsKTtcblxuICAgICAgICAgICAgbGV0IHJlbGF0aW9uc2hpcE9iamVjdCA9IG5ldyBSZWxhdGlvbnNoaXAodGhpcywgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzW3JlbGF0aW9uc2hpcC5rZXldID0gTW9kZWxGYWN0b3J5Lm1ha2VSZWxhdGVkRnJvbVJlbGF0aW9uc2hpcChyZWxhdGlvbnNoaXBPYmplY3QsIHJlbGF0aW9uc2hpcC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbmFrZVRvQ2FtZWwoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvX1xcdy9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUmVsYXRpb25zaGlwIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RlbCwgcHJvdGVjdGVkIHJlbGF0ZWQsIHByb3RlY3RlZCB0eXBlKSB7fVxuXG4gICAgc2V0UmVsYXRlZChyZWxhdGVkKSB7XG4gICAgICAgIHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICB9XG5cbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICAvLyBpZiB0aGUgcmVsYXRlZCBtb2RlbCBpc24ndCBpbnN0YW50aWF0ZWQsXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIGl0IGhlcmVcbiAgICAgICAgaWYoICEgKHRoaXMucmVsYXRlZCBpbnN0YW5jZW9mIEJhc2VNb2RlbCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZCA9IG5ldyB0aGlzLnJlbGF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAnaGFzTWFueScgfHwgdGhpcy50eXBlID09ICdoYXNPbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWQuc2V0VXJpKHRoaXMubW9kZWwuZ2V0U2VsZlVyaSgpICsgJy8nICsgdGhpcy5yZWxhdGVkLmdldFVyaSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlbCgpIHtcblxuICAgIH1cblxuICAgIGdldFVyaSgpIHtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tICcuL3JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGVsRmFjdG9yeSB7XG5cbiAgICBzdGF0aWMgbWFrZShtb2RlbCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IG1vZGVsKCkuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VGcm9tQXJyYXkobW9kZWwsIGFycmF5KSB7XG4gICAgICAgIGxldCBtb2RlbHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpaSA9IDA7IGlpIDwgYXJyYXkubGVuZ3RoOyArK2lpKSB7XG4gICAgICAgICAgICBtb2RlbHMucHVzaChuZXcgbW9kZWwoKS5kZXNlcmlhbGl6ZShhcnJheVtpaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWxzO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlUmVsYXRlZChtb2RlbCwgcmVsYXRlZCwga2V5KSB7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBDb25maWcgPSBtb2RlbC5nZXRSZWxhdGlvbnNoaXAoa2V5KTtcblxuICAgICAgICBsZXQgcmVsYXRpb25zaGlwID0gbmV3IFJlbGF0aW9uc2hpcChtb2RlbCwgcmVsYXRlZCwgcmVsYXRpb25zaGlwQ29uZmlnLnR5cGUpO1xuXG4gICAgICAgIG1vZGVsW2tleV0gPSByZWxhdGlvbnNoaXAuY3JlYXRlKCk7XG5cbiAgICAgICAgbW9kZWwuc2V0VXJpKG1vZGVsW2tleV0uZ2V0U2VsZlVyaSgpICsgJy8nICsgbW9kZWwuZ2V0VXJpKCkpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZVJlbGF0ZWRGcm9tUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcCwgaW5wdXQpIHtcbiAgICAgICAgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc09uZScgfHwgcmVsYXRpb25zaGlwLnR5cGUgPT0gJ2JlbG9uZ3NUbycpIHtcbiAgICAgICAgICAgIHJldHVybiByZWxhdGlvbnNoaXAuY3JlYXRlKCkuZGVzZXJpYWxpemUoaW5wdXQpO1xuICAgICAgICB9IGVsc2UgaWYocmVsYXRpb25zaGlwLnR5cGUgPT0gJ2hhc01hbnknKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVkID0gcmVsYXRpb25zaGlwLmdldFJlbGF0ZWQoKTtcbiAgICAgICAgICAgIC8vIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQocmVsYXRlZC5rZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KHJlbGF0ZWQsIGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsLmZhY3RvcnknO1xuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSBcIi4uL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cblxuICAgIHByb3RlY3RlZCBtb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcGk6IEFwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICAvLyBzZXQgbW9kZWxcbiAgICBzZXRNb2RlbChtb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgZmluZChpZCkge1xuICAgICAgICBsZXQgY29uc3RydWN0b3IgPSBNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldChuZXcgY29uc3RydWN0b3IoKS5nZXRVcmkoKSArICcvJyArIGlkKS5waXBlKG1hcCgoY2xpZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNsaWVudC5kYXRhID0gTW9kZWxGYWN0b3J5Lm1ha2UoTW9kZWxzLmdldCh0aGlzLm1vZGVsLmtleSksIGNsaWVudC5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzYXZlKGRhdGEpIHtcbiAgICAgICAgaWYoZGF0YVtkYXRhLmdldEtleSgpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU5ldyhkYXRhKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IGRhdGEuc2VyaWFsaXplKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5wdXQoZGF0YS5nZXRVcmkoKSArICcvJyArIGRhdGFbZGF0YS5nZXRLZXkoKV0sIHBheWxvYWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldyhkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QoZGF0YS5nZXRVcmkoKSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgZGVzdHJveShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5kZWxldGUoZGF0YS5nZXRVcmkoKSArICcvJyArIGRhdGFbZGF0YS5nZXRLZXkoKV0pO1xuICAgIH1cblxuICAgIGdldChtb2RlbCA9IG51bGwsIG9wdGlvbnM6IGFueSA9IHsgcGFnZTogMSB9KSB7XG5cblxuICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKG9wdGlvbnMucGFnZSAhPSAxKSB7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgncGFnZScsIFN0cmluZyhvcHRpb25zLnBhZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvYnNlcnZhYmxlO1xuXG4gICAgICAgIGlmKG1vZGVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdGhpcy5hcGkuZ2V0KG5ldyB0aGlzLm1vZGVsKCkuZ2V0VXJpKCksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobW9kZWwuZ2V0VXJpKCksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZChyZWxhdGVkLCBrZXksIG1vZGVsID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmKG1vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQobW9kZWwua2V5KTtcbiAgICAgICAgbW9kZWwgPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWQobmV3IGNvbnN0cnVjdG9yKCksIHJlbGF0ZWQsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1vZGVsKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7Q09ORklHfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczpcbiAgICBbXG4gICAgICAgIEFwaVNlcnZpY2UsXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hSZXN0TW9kZWxNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hSZXN0TW9kZWxNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFB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