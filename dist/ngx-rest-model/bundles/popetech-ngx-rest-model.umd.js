(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@popetech/ngx-rest-model', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators'], factory) :
    (factory((global.popetech = global.popetech || {}, global.popetech['ngx-rest-model'] = {}),global.ng.core,global.ng.common.http,global.rxjs.operators));
}(this, (function (exports,core,http,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CONFIG = new core.InjectionToken('config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ApiService = (function () {
        function ApiService(http$$1, config) {
            this.http = http$$1;
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
                if (bypassPrefix === void 0) {
                    bypassPrefix = false;
                }
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
                if (options === void 0) {
                    options = {};
                }
                if (bypassPrefix === void 0) {
                    bypassPrefix = false;
                }
                /** @type {?} */
                var url = this.getUrl(uri, bypassPrefix);
                if (options != {}) {
                    return this.http.get(url, options).pipe(operators.take(1));
                }
                return this.http.get(url).pipe(operators.take(1));
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
                if (bypassPrefix === void 0) {
                    bypassPrefix = false;
                }
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var url = this.getUrl(uri, bypassPrefix);
                if (options != {}) {
                    return this.http.post(url, payload, options).pipe(operators.take(1));
                }
                return this.http.post(url, payload).pipe(operators.take(1));
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
                if (bypassPrefix === void 0) {
                    bypassPrefix = false;
                }
                /** @type {?} */
                var url = this.getUrl(uri, bypassPrefix);
                return this.http.put(url, payload).pipe(operators.take(1));
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
                if (options === void 0) {
                    options = {};
                }
                if (bypassPrefix === void 0) {
                    bypassPrefix = false;
                }
                /** @type {?} */
                var url = this.getUrl(uri, bypassPrefix);
                return this.http.delete(url).pipe(operators.take(1));
            };
        ApiService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: undefined, decorators: [{ type: core.Inject, args: [CONFIG,] }] }
            ];
        };
        return ApiService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Models = (function () {
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
    var BaseModel = (function () {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (relationships_1_1 && !relationships_1_1.done && (_a = relationships_1.return))
                            _a.call(relationships_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
    var Relationship = (function () {
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
    var ModelFactory = (function () {
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
    var BackendService = (function () {
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
                return this.api.get(new constructor().getUri() + '/' + id).pipe(operators.map(function (client) {
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
                if (model === void 0) {
                    model = null;
                }
                if (options === void 0) {
                    options = { page: 1 };
                }
                /** @type {?} */
                var requestOptions = {
                    params: new http.HttpParams()
                };
                if (options.page != 1) {
                    requestOptions.params = new http.HttpParams().set('page', String(options.page));
                }
                /** @type {?} */
                var observable;
                if (model === null) {
                    observable = this.api.get(new this.model().getUri(), requestOptions);
                }
                else {
                    observable = this.api.get(model.getUri(), requestOptions);
                }
                return observable.pipe(operators.map(function (response) {
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
                if (model === void 0) {
                    model = null;
                }
                if (options === void 0) {
                    options = {};
                }
                if (model == null) {
                    model = this.model;
                }
                /** @type {?} */
                var constructor = Models.get(model.key);
                model = ModelFactory.makeRelated(new constructor(), related, key);
                return this.get(model);
            };
        BackendService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BackendService.ctorParameters = function () {
            return [
                { type: ApiService }
            ];
        };
        return BackendService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxRestModelModule = (function () {
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
            { type: core.NgModule, args: [{
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

    exports.NgxRestModelModule = NgxRestModelModule;
    exports.BaseModel = BaseModel;
    exports.Relationship = Relationship;
    exports.ApiService = ApiService;
    exports.BackendService = BackendService;
    exports.Models = Models;
    exports.ModelFactory = ModelFactory;
    exports.ɵa = CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXJlc3QtbW9kZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2NvbnN0YW50cy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9odHRwL2FwaS5zZXJ2aWNlLnRzIixudWxsLCJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvbW9kZWxzL21vZGVscy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvcmVsYXRpb25zaGlwLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdjb25maWcnKTtcbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBpUm9vdDogc3RyaW5nO1xuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQ09ORklHKSBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvbmZpZy5hcGlfcm9vdDtcblxuICAgICAgICB0aGlzLnNldEJhc2VVcmwocm9vdCk7XG4gICAgICAgIHRoaXMuc2V0QXBpUm9vdChyb290KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFwaVJvb3QodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlSb290ID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcGlSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlSb290O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYoICEgYnlwYXNzUHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnLycgKyB1cmk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlSb290KCkgKyAnLycgKyB1cmk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpOiBhbnkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSwgb3B0aW9ucyA9IHt9KTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTW9kZWxzIHtcblxuICAgIHN0YXRpYyBtb2RlbHMgPSB7fTtcblxuICAgIHN0YXRpYyBhZGQobW9kZWwpIHtcbiAgICAgICAgbGV0IG1vZGVsTmFtZSA9IG5ldyBtb2RlbCgpLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYoIU1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSkge1xuICAgICAgICAgICAgTW9kZWxzLm1vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KG1vZGVsKSB7XG4gICAgICAgIHJldHVybiBNb2RlbHMubW9kZWxzW21vZGVsXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9tb2RlbC5mYWN0b3J5JztcbmltcG9ydCB7IFJlbGF0aW9uc2hpcCB9IGZyb20gJy4vcmVsYXRpb25zaGlwJztcbmltcG9ydCB7IFNlcmlhbGl6YWJsZSB9IGZyb20gJy4vc2VyaWFsaXphYmxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIGltcGxlbWVudHMgTW9kZWwsIFNlcmlhbGl6YWJsZSB7XG5cblxuICAgICBwdWJsaWMgbW9kZWxDb25maWcgPSB7XG4gICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgIGhpZGRlbjogW10sXG4gICAgICAgICByZWxhdGlvbnNoaXBzOiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcgPSB7Li4udGhpcy5nZXRDb25maWcoKSwgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnO1xuICAgIH1cblxuICAgIGdldFVyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcudXJpO1xuICAgIH1cblxuICAgIGdldFNlbGZVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaSArICcvJyArIHRoaXNbdGhpcy5tb2RlbENvbmZpZy5rZXldO1xuICAgIH1cblxuICAgIHNldFVyaSh1cmkpIHtcbiAgICAgICAgdGhpcy5tb2RlbENvbmZpZy51cmkgPSB1cmk7XG4gICAgfVxuXG4gICAgZ2V0S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRpb25zaGlwKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy5yZWxhdGlvbnNoaXBzW2tleV07XG4gICAgfVxuXG4gICAgZGVzZXJpYWxpemUoaW5wdXQpIHtcblxuICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9wIGluIGlucHV0KSB7XG4gICAgICAgICAgICBpZighIGlucHV0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNvbmZpZy5oaWRkZW4uaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiBpbnB1dFtwcm9wXSA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZy5yZWxhdGlvbnNoaXBzLmhhc093blByb3BlcnR5KHRoaXMuc25ha2VUb0NhbWVsKHByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGlvbnNoaXBzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoaW5wdXRbcHJvcF0gPyBpbnB1dFtwcm9wXS5kYXRhIDogbnVsbClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXNbdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCldID0gaW5wdXRbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IHJlbGF0aW9uc2hpcCBvZiByZWxhdGlvbnNoaXBzKSB7XG5cbiAgICAgICAgICAgIGlmKHJlbGF0aW9uc2hpcC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVsYXRpb25zaGlwQ29uZmlnID0gY29uZmlnLnJlbGF0aW9uc2hpcHNbcmVsYXRpb25zaGlwLmtleV07XG5cbiAgICAgICAgICAgIGxldCByZWxhdGVkID0gTW9kZWxzLmdldChyZWxhdGlvbnNoaXBDb25maWcubW9kZWwpO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRpb25zaGlwT2JqZWN0ID0gbmV3IFJlbGF0aW9uc2hpcCh0aGlzLCByZWxhdGVkLCByZWxhdGlvbnNoaXBDb25maWcudHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXNbcmVsYXRpb25zaGlwLmtleV0gPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWRGcm9tUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcE9iamVjdCwgcmVsYXRpb25zaGlwLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNuYWtlVG9DYW1lbChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4vYmFzZS1tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBSZWxhdGlvbnNoaXAge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGVsLCBwcm90ZWN0ZWQgcmVsYXRlZCwgcHJvdGVjdGVkIHR5cGUpIHt9XG5cbiAgICBzZXRSZWxhdGVkKHJlbGF0ZWQpIHtcbiAgICAgICAgdGhpcy5yZWxhdGVkID0gcmVsYXRlZDtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkO1xuICAgIH1cblxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZWxhdGVkIG1vZGVsIGlzbid0IGluc3RhbnRpYXRlZCxcbiAgICAgICAgLy8gaW5zdGFudGlhdGUgaXQgaGVyZVxuICAgICAgICBpZiggISAodGhpcy5yZWxhdGVkIGluc3RhbmNlb2YgQmFzZU1vZGVsKSkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkID0gbmV3IHRoaXMucmVsYXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50eXBlID09ICdoYXNNYW55JyB8fCB0aGlzLnR5cGUgPT0gJ2hhc09uZScpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZC5zZXRVcmkodGhpcy5tb2RlbC5nZXRTZWxmVXJpKCkgKyAnLycgKyB0aGlzLnJlbGF0ZWQuZ2V0VXJpKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAnYmVsb25nc1RvJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVsKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0VXJpKCkge1xuXG4gICAgfVxufSIsImltcG9ydCB7IFJlbGF0aW9uc2hpcCB9IGZyb20gJy4vcmVsYXRpb25zaGlwJztcbmltcG9ydCB7IE1vZGVscyB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5leHBvcnQgY2xhc3MgTW9kZWxGYWN0b3J5IHtcblxuICAgIHN0YXRpYyBtYWtlKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgbW9kZWwoKS5kZXNlcmlhbGl6ZShkYXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZUZyb21BcnJheShtb2RlbCwgYXJyYXkpIHtcbiAgICAgICAgbGV0IG1vZGVscyA9IFtdO1xuICAgICAgICBmb3IobGV0IGlpID0gMDsgaWkgPCBhcnJheS5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgICAgIG1vZGVscy5wdXNoKG5ldyBtb2RlbCgpLmRlc2VyaWFsaXplKGFycmF5W2lpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbHM7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VSZWxhdGVkKG1vZGVsLCByZWxhdGVkLCBrZXkpIHtcbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcENvbmZpZyA9IG1vZGVsLmdldFJlbGF0aW9uc2hpcChrZXkpO1xuXG4gICAgICAgIGxldCByZWxhdGlvbnNoaXAgPSBuZXcgUmVsYXRpb25zaGlwKG1vZGVsLCByZWxhdGVkLCByZWxhdGlvbnNoaXBDb25maWcudHlwZSk7XG5cbiAgICAgICAgbW9kZWxba2V5XSA9IHJlbGF0aW9uc2hpcC5jcmVhdGUoKTtcblxuICAgICAgICBtb2RlbC5zZXRVcmkobW9kZWxba2V5XS5nZXRTZWxmVXJpKCkgKyAnLycgKyBtb2RlbC5nZXRVcmkoKSk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlUmVsYXRlZEZyb21SZWxhdGlvbnNoaXAocmVsYXRpb25zaGlwLCBpbnB1dCkge1xuICAgICAgICBpZihyZWxhdGlvbnNoaXAudHlwZSA9PSAnaGFzT25lJyB8fCByZWxhdGlvbnNoaXAudHlwZSA9PSAnYmVsb25nc1RvJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbGF0aW9uc2hpcC5jcmVhdGUoKS5kZXNlcmlhbGl6ZShpbnB1dCk7XG4gICAgICAgIH0gZWxzZSBpZihyZWxhdGlvbnNoaXAudHlwZSA9PSAnaGFzTWFueScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWQgPSByZWxhdGlvbnNoaXAuZ2V0UmVsYXRlZCgpO1xuICAgICAgICAgICAgLy8gbGV0IGNvbnN0cnVjdG9yID0gTW9kZWxzLmdldChyZWxhdGVkLmtleSk7XG4gICAgICAgICAgICByZXR1cm4gTW9kZWxGYWN0b3J5Lm1ha2VGcm9tQXJyYXkocmVsYXRlZCwgaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuXG4gICAgcHJvdGVjdGVkIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwaTogQXBpU2VydmljZSkge1xuICAgIH1cblxuICAgIC8vIHNldCBtb2RlbFxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBmaW5kKGlkKSB7XG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KG5ldyBjb25zdHJ1Y3RvcigpLmdldFVyaSgpICsgJy8nICsgaWQpLnBpcGUobWFwKChjbGllbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY2xpZW50LmRhdGEgPSBNb2RlbEZhY3RvcnkubWFrZShNb2RlbHMuZ2V0KHRoaXMubW9kZWwua2V5KSwgY2xpZW50LmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNhdmUoZGF0YSkge1xuICAgICAgICBpZihkYXRhW2RhdGEuZ2V0S2V5KCldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTmV3KGRhdGEpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gZGF0YS5zZXJpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLnB1dChkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSwgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucG9zdChkYXRhLmdldFVyaSgpLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpLmRlbGV0ZShkYXRhLmdldFVyaSgpICsgJy8nICsgZGF0YVtkYXRhLmdldEtleSgpXSk7XG4gICAgfVxuXG4gICAgZ2V0KG1vZGVsID0gbnVsbCwgb3B0aW9uczogYW55ID0geyBwYWdlOiAxIH0pIHtcblxuXG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYob3B0aW9ucy5wYWdlICE9IDEpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdwYWdlJywgU3RyaW5nKG9wdGlvbnMucGFnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9ic2VydmFibGU7XG5cbiAgICAgICAgaWYobW9kZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSB0aGlzLmFwaS5nZXQobmV3IHRoaXMubW9kZWwoKS5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChtb2RlbC5nZXRVcmkoKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gTW9kZWxGYWN0b3J5Lm1ha2VGcm9tQXJyYXkoTW9kZWxzLmdldCh0aGlzLm1vZGVsLmtleSksIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkKHJlbGF0ZWQsIGtleSwgbW9kZWwgPSBudWxsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYobW9kZWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnN0cnVjdG9yID0gTW9kZWxzLmdldChtb2RlbC5rZXkpO1xuICAgICAgICBtb2RlbCA9IE1vZGVsRmFjdG9yeS5tYWtlUmVsYXRlZChuZXcgY29uc3RydWN0b3IoKSwgcmVsYXRlZCwga2V5KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQobW9kZWwpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHtDT05GSUd9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW10sXG4gICAgcHJvdmlkZXJzOlxuICAgIFtcbiAgICAgICAgQXBpU2VydmljZSxcbiAgICAgICAgQmFja2VuZFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFJlc3RNb2RlbE1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neFJlc3RNb2RlbE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfV1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJodHRwIiwidGFrZSIsIkluamVjdGFibGUiLCJIdHRwQ2xpZW50IiwiSW5qZWN0IiwidHNsaWJfMS5fX3ZhbHVlcyIsIm1hcCIsIkh0dHBQYXJhbXMiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUEsUUFBYSxNQUFNLEdBQUcsSUFBSUEsbUJBQWMsQ0FBQyxRQUFRLENBQUM7Ozs7OztBQ0ZsRDtRQWNJLG9CQUFZQyxPQUFnQixFQUFrQixNQUFNO1lBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUdBLE9BQUksQ0FBQzs7WUFDakIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUU3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7Ozs7O1FBRU0sK0JBQVU7Ozs7c0JBQUMsR0FBVztnQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7O1FBR2hCLCtCQUFVOzs7O2dCQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O1FBR2pCLCtCQUFVOzs7O3NCQUFDLEdBQVc7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7OztRQUdoQiwrQkFBVTs7OztnQkFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7UUFHaEIsMkJBQU07Ozs7O3NCQUFDLEdBQUcsRUFBRSxZQUFvQjtnQkFBcEIsNkJBQUE7b0JBQUEsb0JBQW9COztnQkFDcEMsSUFBSSxDQUFFLFlBQVksRUFBRTtvQkFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztpQkFDeEM7Z0JBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7UUFHbEMsd0JBQUc7Ozs7OztzQkFBQyxHQUFHLEVBQUUsT0FBWSxFQUFFLFlBQW9CO2dCQUFsQyx3QkFBQTtvQkFBQSxZQUFZOztnQkFBRSw2QkFBQTtvQkFBQSxvQkFBb0I7OztnQkFDOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3pDLElBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRTtvQkFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNDLGNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ0EsY0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztRQUdyQyx5QkFBSTs7Ozs7OztzQkFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFlBQW9CLEVBQUUsT0FBWTtnQkFBbEMsNkJBQUE7b0JBQUEsb0JBQW9COztnQkFBRSx3QkFBQTtvQkFBQSxZQUFZOzs7Z0JBQ3hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUV6QyxJQUFHLE9BQU8sSUFBSSxFQUFFLEVBQUU7b0JBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsY0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzlEO2dCQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQ0EsY0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O1FBRy9DLHdCQUFHOzs7Ozs7c0JBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFvQjtnQkFBcEIsNkJBQUE7b0JBQUEsb0JBQW9COzs7Z0JBQ3pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUV6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLGNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztRQUc5QywyQkFBTTs7Ozs7O3NCQUFDLEdBQUcsRUFBRSxPQUFZLEVBQUUsWUFBb0I7Z0JBQWxDLHdCQUFBO29CQUFBLFlBQVk7O2dCQUFFLDZCQUFBO29CQUFBLG9CQUFvQjs7O2dCQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUNBLGNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7b0JBbkVsREMsZUFBVTs7Ozs7d0JBTEZDLGVBQVU7d0RBWWdCQyxXQUFNLFNBQUMsTUFBTTs7O3lCQWRoRDs7O0lDQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFBO0FBRUQsc0JBa0V5QixDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU87WUFDSCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO29CQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDM0M7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7Ozs7OztRQy9HVSxVQUFHOzs7O1lBQVYsVUFBVyxLQUFLOztnQkFDWixJQUFJLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNELElBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDcEM7YUFDSjs7Ozs7UUFFTSxVQUFHOzs7O1lBQVYsVUFBVyxLQUFLO2dCQUNaLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjt3QkFYZSxFQUFFO3FCQUZ0Qjs7Ozs7OztRQ09BO1FBVUk7K0JBUHNCO2dCQUNqQixHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTtnQkFDUCxNQUFNLEVBQUUsRUFBRTtnQkFDVixhQUFhLEVBQUUsRUFBRTthQUNyQjtTQUVlOzs7OztRQUVoQiw2QkFBUzs7OztZQUFULFVBQVUsTUFBTTtnQkFDWixJQUFJLENBQUMsV0FBVyxnQkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUssTUFBTSxDQUFDLENBQUM7YUFDdkQ7Ozs7UUFFRCw2QkFBUzs7O1lBQVQ7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNCOzs7O1FBRUQsMEJBQU07OztZQUFOO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7YUFDL0I7Ozs7UUFFRCw4QkFBVTs7O1lBQVY7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEU7Ozs7O1FBRUQsMEJBQU07Ozs7WUFBTixVQUFPLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQzlCOzs7O1FBRUQsMEJBQU07OztZQUFOO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7YUFDL0I7Ozs7O1FBRUQsbUNBQWU7Ozs7WUFBZixVQUFnQixHQUFHO2dCQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUM7Ozs7O1FBRUQsK0JBQVc7Ozs7WUFBWCxVQUFZLEtBQUs7O2dCQUViLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Z0JBQzlCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsS0FBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7b0JBQ25CLElBQUcsQ0FBRSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUM3QixTQUFTO3FCQUNaO29CQUVELElBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pDLFNBQVM7cUJBQ1o7b0JBRUQsSUFBRyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7d0JBRWhDLElBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFOzRCQUM3RCxhQUFhLENBQUMsSUFBSSxDQUFDO2dDQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQ0FDNUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs2QkFDakQsQ0FBQyxDQUFDO3lCQUNOO3dCQUVELFNBQVM7cUJBQ1o7b0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9DOztvQkFFRCxLQUF3QixJQUFBLGtCQUFBQyxTQUFBLGFBQWEsQ0FBQSw0Q0FBQTt3QkFBakMsSUFBSSxZQUFZLDBCQUFBO3dCQUVoQixJQUFHLFlBQVksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFOzRCQUM1QixTQUFTO3lCQUNaOzt3QkFFRCxJQUFJLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzt3QkFFaEUsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7d0JBRW5ELElBQUksa0JBQWtCLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFbEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM3Rzs7Ozs7Ozs7Ozs7Ozs7O2dCQUVELE9BQU8sSUFBSSxDQUFDOzthQUNmOzs7OztRQUVELGdDQUFZOzs7O1lBQVosVUFBYSxNQUFNO2dCQUNmLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBUyxDQUFDO29CQUNwQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2FBQ047d0JBakdMO1FBa0dDOzs7Ozs7QUNsR0QsUUFFQTtRQUVJLHNCQUFzQixLQUFLLEVBQVksT0FBTyxFQUFZLElBQUk7WUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBQTtZQUFZLFlBQU8sR0FBUCxPQUFPLENBQUE7WUFBWSxTQUFJLEdBQUosSUFBSSxDQUFBO1NBQUk7Ozs7O1FBRWxFLGlDQUFVOzs7O1lBQVYsVUFBVyxPQUFPO2dCQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQzFCOzs7O1FBRUQsaUNBQVU7OztZQUFWO2dCQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2Qjs7Ozs7UUFFRCwrQkFBUTs7OztZQUFSLFVBQVMsS0FBSztnQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN0Qjs7OztRQUVELDZCQUFNOzs7WUFBTjs7O2dCQUdJLElBQUksRUFBRyxJQUFJLENBQUMsT0FBTyxZQUFZLFNBQVMsQ0FBQyxFQUFFO29CQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNyQztnQkFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQzNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDdkI7Z0JBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtvQkFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUN2QjthQUNKOzs7O1FBRUQsK0JBQVE7OztZQUFSO2FBRUM7Ozs7UUFFRCw2QkFBTTs7O1lBQU47YUFFQzsyQkF6Q0w7UUEwQ0M7Ozs7OztBQzFDRCxRQUdBOzs7Ozs7OztRQUVXLGlCQUFJOzs7OztZQUFYLFVBQVksS0FBSyxFQUFFLElBQUk7Z0JBQ25CLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEM7Ozs7OztRQUVNLDBCQUFhOzs7OztZQUFwQixVQUFxQixLQUFLLEVBQUUsS0FBSzs7Z0JBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsS0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkQ7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7YUFDakI7Ozs7Ozs7UUFFTSx3QkFBVzs7Ozs7O1lBQWxCLFVBQW1CLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRzs7Z0JBQ2xDLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBRXBELElBQUksWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTdFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRW5DLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFFN0QsT0FBTyxLQUFLLENBQUM7YUFDaEI7Ozs7OztRQUVNLHdDQUEyQjs7Ozs7WUFBbEMsVUFBbUMsWUFBWSxFQUFFLEtBQUs7Z0JBQ2xELElBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksWUFBWSxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUU7b0JBQ2xFLE9BQU8sWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU0sSUFBRyxZQUFZLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTs7b0JBQ3RDLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7b0JBRTFDLE9BQU8sWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3JEO2FBRUo7MkJBdENMO1FBd0NDOzs7Ozs7QUN4Q0Q7UUFlSSx3QkFBc0IsR0FBZTtZQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7U0FDcEM7Ozs7OztRQUdELGlDQUFROzs7O1lBQVIsVUFBUyxLQUFLO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3RCOzs7OztRQUVELDZCQUFJOzs7O1lBQUosVUFBSyxFQUFFO2dCQUFQLGlCQU1DOztnQkFMRyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDQyxhQUFHLENBQUMsVUFBQyxNQUFXO29CQUM1RSxNQUFNLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekUsT0FBTyxNQUFNLENBQUM7aUJBQ2pCLENBQUMsQ0FBQyxDQUFDO2FBQ1A7Ozs7O1FBRUQsNkJBQUk7Ozs7WUFBSixVQUFLLElBQUk7Z0JBQ0wsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9COzs7OztRQUVELCtCQUFNOzs7O1lBQU4sVUFBTyxJQUFJOztnQkFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0U7Ozs7O1FBRUQsa0NBQVM7Ozs7WUFBVCxVQUFVLElBQUk7O2dCQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDaEQ7Ozs7O1FBRUQsZ0NBQU87Ozs7WUFBUCxVQUFRLElBQUk7Z0JBQ1IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JFOzs7Ozs7UUFFRCw0QkFBRzs7Ozs7WUFBSCxVQUFJLEtBQVksRUFBRSxPQUEwQjtnQkFBNUMsaUJBMEJDO2dCQTFCRyxzQkFBQTtvQkFBQSxZQUFZOztnQkFBRSx3QkFBQTtvQkFBQSxZQUFpQixJQUFJLEVBQUUsQ0FBQyxFQUFFOzs7Z0JBR3hDLElBQUksY0FBYyxHQUFRO29CQUN0QixNQUFNLEVBQUUsSUFBSUMsZUFBVSxFQUFFO2lCQUMzQixDQUFDO2dCQUVGLElBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQ2xCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSUEsZUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzlFOztnQkFFRCxJQUFJLFVBQVUsQ0FBQztnQkFFZixJQUFHLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUN4RTtxQkFBTTtvQkFDSCxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUM3RDtnQkFFRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQ2RELGFBQUcsQ0FBQyxVQUFDLFFBQWE7O29CQUNkLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdFLE9BQU8sUUFBUSxDQUFDO2lCQUNuQixDQUFDLENBQ1QsQ0FBQzthQUNMOzs7Ozs7OztRQUVELG1DQUFVOzs7Ozs7O1lBQVYsVUFBVyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQVksRUFBRSxPQUFZO2dCQUExQixzQkFBQTtvQkFBQSxZQUFZOztnQkFBRSx3QkFBQTtvQkFBQSxZQUFZOztnQkFDL0MsSUFBRyxLQUFLLElBQUksSUFBSSxFQUFFO29CQUNkLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN0Qjs7Z0JBRUQsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUssR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUVsRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7O29CQWhGSkosZUFBVTs7Ozs7d0JBTkYsVUFBVTs7OzZCQUhuQjs7Ozs7OztBQ0FBOzs7Ozs7O1FBZ0JrQiwwQkFBTzs7OztzQkFBQyxNQUFNO2dCQUN4QixPQUFPO29CQUNILFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7aUJBQ3BELENBQUM7OztvQkFmVE0sYUFBUSxTQUFDO3dCQUNOLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFlBQVksRUFBRSxFQUFFO3dCQUNoQixPQUFPLEVBQUUsRUFBRTt3QkFDWCxTQUFTLEVBQ1Q7NEJBQ0ksVUFBVTs0QkFDVixjQUFjO3lCQUNqQjtxQkFDSjs7aUNBZEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==