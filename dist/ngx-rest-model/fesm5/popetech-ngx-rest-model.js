import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import { __assign, __values } from 'tslib';

var CONFIG = new InjectionToken('config');

var ApiService = /** @class */ (function () {
    function ApiService(http, config) {
        this.http = http;
        var root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    ApiService.prototype.setBaseUrl = function (url) {
        this.baseUrl = url;
    };
    ApiService.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    ApiService.prototype.setApiRoot = function (url) {
        this.apiRoot = url;
    };
    ApiService.prototype.getApiRoot = function () {
        return this.apiRoot;
    };
    ApiService.prototype.getUrl = function (uri, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    };
    ApiService.prototype.get = function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    };
    ApiService.prototype.post = function (uri, payload, bypassPrefix, options) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        if (options === void 0) { options = {}; }
        var url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    };
    ApiService.prototype.put = function (uri, payload, bypassPrefix) {
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    };
    ApiService.prototype.delete = function (uri, options, bypassPrefix) {
        if (options === void 0) { options = {}; }
        if (bypassPrefix === void 0) { bypassPrefix = false; }
        var url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    };
    ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(ɵɵinject(HttpClient), ɵɵinject(CONFIG)); };
    ApiService.ɵprov = ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac });
    return ApiService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ApiService, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: [CONFIG]
            }] }]; }, null); })();

var Models = /** @class */ (function () {
    function Models() {
    }
    Models.add = function (model) {
        var modelName = new model().constructor.name.toLowerCase();
        if (!Models.models[modelName]) {
            Models.models[modelName] = model;
        }
    };
    Models.get = function (model) {
        return Models.models[model];
    };
    Models.models = {};
    return Models;
}());

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

var BackendService = /** @class */ (function () {
    function BackendService(api) {
        this.api = api;
    }
    // set model
    BackendService.prototype.setModel = function (model) {
        this.model = model;
    };
    BackendService.prototype.find = function (id) {
        var _this = this;
        var constructor = Models.get(this.model.key);
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map(function (client) {
            client.data = ModelFactory.make(Models.get(_this.model.key), client.data);
            return client;
        }));
    };
    BackendService.prototype.save = function (data) {
        if (data[data.getKey()]) {
            return this.update(data);
        }
        return this.createNew(data);
    };
    BackendService.prototype.update = function (data) {
        var payload = data.serialize();
        return this.api.put(data.getUri() + '/' + data[data.getKey()], payload);
    };
    BackendService.prototype.createNew = function (data) {
        var payload = data.serialize();
        return this.api.post(data.getUri(), payload);
    };
    BackendService.prototype.destroy = function (data) {
        return this.api.delete(data.getUri() + '/' + data[data.getKey()]);
    };
    BackendService.prototype.get = function (model, options) {
        var _this = this;
        if (model === void 0) { model = null; }
        if (options === void 0) { options = { page: 1 }; }
        var requestOptions = {
            params: new HttpParams()
        };
        if (options.page != 1) {
            requestOptions.params = new HttpParams().set('page', String(options.page));
        }
        var observable;
        if (model === null) {
            observable = this.api.get(new this.model().getUri(), requestOptions);
        }
        else {
            observable = this.api.get(model.getUri(), requestOptions);
        }
        return observable.pipe(map(function (response) {
            var data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(_this.model.key), data);
            return response;
        }));
    };
    BackendService.prototype.getRelated = function (related, key, model, options) {
        if (model === void 0) { model = null; }
        if (options === void 0) { options = {}; }
        if (model == null) {
            model = this.model;
        }
        var constructor = Models.get(model.key);
        model = ModelFactory.makeRelated(new constructor(), related, key);
        return this.get(model);
    };
    BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(ɵɵinject(ApiService)); };
    BackendService.ɵprov = ɵɵdefineInjectable({ token: BackendService, factory: BackendService.ɵfac });
    return BackendService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BackendService, [{
        type: Injectable
    }], function () { return [{ type: ApiService }]; }, null); })();

var NgxRestModelModule = /** @class */ (function () {
    function NgxRestModelModule() {
    }
    NgxRestModelModule.forRoot = function (config) {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    };
    NgxRestModelModule.ɵmod = ɵɵdefineNgModule({ type: NgxRestModelModule });
    NgxRestModelModule.ɵinj = ɵɵdefineInjector({ factory: function NgxRestModelModule_Factory(t) { return new (t || NgxRestModelModule)(); }, providers: [
            ApiService,
            BackendService
        ], imports: [[]] });
    return NgxRestModelModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxRestModelModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    ApiService,
                    BackendService
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-rest-model
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApiService, BackendService, BaseModel, ModelFactory, Models, NgxRestModelModule, Relationship };
//# sourceMappingURL=popetech-ngx-rest-model.js.map
