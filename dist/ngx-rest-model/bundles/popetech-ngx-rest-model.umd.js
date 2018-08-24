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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wZXRlY2gtbmd4LXJlc3QtbW9kZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2NvbnN0YW50cy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9odHRwL2FwaS5zZXJ2aWNlLnRzIixudWxsLCJuZzovL0Bwb3BldGVjaC9uZ3gtcmVzdC1tb2RlbC9saWIvbW9kZWxzL21vZGVscy50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvYmFzZS1tb2RlbC50cyIsIm5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsL2xpYi9tb2RlbHMvcmVsYXRpb25zaGlwLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL21vZGVscy9tb2RlbC5mYWN0b3J5LnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL2h0dHAvYmFja2VuZC5zZXJ2aWNlLnRzIiwibmc6Ly9AcG9wZXRlY2gvbmd4LXJlc3QtbW9kZWwvbGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdjb25maWcnKTtcbiIsImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENPTkZJRyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBpUm9vdDogc3RyaW5nO1xuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQ09ORklHKSBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNvbmZpZy5hcGlfcm9vdDtcblxuICAgICAgICB0aGlzLnNldEJhc2VVcmwocm9vdCk7XG4gICAgICAgIHRoaXMuc2V0QXBpUm9vdChyb290KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFwaVJvb3QodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlSb290ID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBcGlSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlSb290O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgaWYoICEgYnlwYXNzUHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCYXNlVXJsKCkgKyAnLycgKyB1cmk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGlSb290KCkgKyAnLycgKyB1cmk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwodXJpLCBieXBhc3NQcmVmaXgpO1xuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3QodXJpLCBwYXlsb2FkLCBieXBhc3NQcmVmaXggPSBmYWxzZSwgb3B0aW9ucyA9IHt9KTogYW55IHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICBpZihvcHRpb25zICE9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXlsb2FkLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgcGF5bG9hZCkucGlwZSh0YWtlKDEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KHVyaSwgcGF5bG9hZCwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZSh1cmksIG9wdGlvbnMgPSB7fSwgYnlwYXNzUHJlZml4ID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKHVyaSwgYnlwYXNzUHJlZml4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTW9kZWxzIHtcblxuICAgIHN0YXRpYyBtb2RlbHMgPSB7fTtcblxuICAgIHN0YXRpYyBhZGQobW9kZWwpIHtcbiAgICAgICAgbGV0IG1vZGVsTmFtZSA9IG5ldyBtb2RlbCgpLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYoIU1vZGVscy5tb2RlbHNbbW9kZWxOYW1lXSkge1xuICAgICAgICAgICAgTW9kZWxzLm1vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KG1vZGVsKSB7XG4gICAgICAgIHJldHVybiBNb2RlbHMubW9kZWxzW21vZGVsXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9tb2RlbC5mYWN0b3J5JztcbmltcG9ydCB7IFJlbGF0aW9uc2hpcCB9IGZyb20gJy4vcmVsYXRpb25zaGlwJztcbmltcG9ydCB7IFNlcmlhbGl6YWJsZSB9IGZyb20gJy4vc2VyaWFsaXphYmxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgTW9kZWxzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIGltcGxlbWVudHMgTW9kZWwsIFNlcmlhbGl6YWJsZSB7XG5cblxuICAgICBwdWJsaWMgbW9kZWxDb25maWcgPSB7XG4gICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgIGhpZGRlbjogW10sXG4gICAgICAgICByZWxhdGlvbnNoaXBzOiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHRoaXMubW9kZWxDb25maWcgPSB7Li4udGhpcy5nZXRDb25maWcoKSwgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnO1xuICAgIH1cblxuICAgIGdldFVyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxDb25maWcudXJpO1xuICAgIH1cblxuICAgIGdldFNlbGZVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsQ29uZmlnLnVyaSArICcvJyArIHRoaXNbdGhpcy5tb2RlbENvbmZpZy5rZXldO1xuICAgIH1cblxuICAgIHNldFVyaSh1cmkpIHtcbiAgICAgICAgdGhpcy5tb2RlbENvbmZpZy51cmkgPSB1cmk7XG4gICAgfVxuXG4gICAgZ2V0S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRpb25zaGlwKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbENvbmZpZy5yZWxhdGlvbnNoaXBzW2tleV07XG4gICAgfVxuXG4gICAgZGVzZXJpYWxpemUoaW5wdXQpIHtcblxuICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9wIGluIGlucHV0KSB7XG4gICAgICAgICAgICBpZighIGlucHV0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNvbmZpZy5oaWRkZW4uaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiBpbnB1dFtwcm9wXSA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZy5yZWxhdGlvbnNoaXBzLmhhc093blByb3BlcnR5KHRoaXMuc25ha2VUb0NhbWVsKHByb3ApKSkge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGlvbnNoaXBzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLnNuYWtlVG9DYW1lbChwcm9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoaW5wdXRbcHJvcF0gPyBpbnB1dFtwcm9wXS5kYXRhIDogbnVsbClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXNbdGhpcy5zbmFrZVRvQ2FtZWwocHJvcCldID0gaW5wdXRbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IHJlbGF0aW9uc2hpcCBvZiByZWxhdGlvbnNoaXBzKSB7XG5cbiAgICAgICAgICAgIGlmKHJlbGF0aW9uc2hpcC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVsYXRpb25zaGlwQ29uZmlnID0gY29uZmlnLnJlbGF0aW9uc2hpcHNbcmVsYXRpb25zaGlwLmtleV07XG5cbiAgICAgICAgICAgIGxldCByZWxhdGVkID0gTW9kZWxzLmdldChyZWxhdGlvbnNoaXBDb25maWcubW9kZWwpO1xuXG4gICAgICAgICAgICBsZXQgcmVsYXRpb25zaGlwT2JqZWN0ID0gbmV3IFJlbGF0aW9uc2hpcCh0aGlzLCByZWxhdGVkLCByZWxhdGlvbnNoaXBDb25maWcudHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXNbcmVsYXRpb25zaGlwLmtleV0gPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWRGcm9tUmVsYXRpb25zaGlwKHJlbGF0aW9uc2hpcE9iamVjdCwgcmVsYXRpb25zaGlwLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNuYWtlVG9DYW1lbChzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fXFx3L2csIGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4vYmFzZS1tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBSZWxhdGlvbnNoaXAge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGVsLCBwcm90ZWN0ZWQgcmVsYXRlZCwgcHJvdGVjdGVkIHR5cGUpIHt9XG5cbiAgICBzZXRSZWxhdGVkKHJlbGF0ZWQpIHtcbiAgICAgICAgdGhpcy5yZWxhdGVkID0gcmVsYXRlZDtcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGVkO1xuICAgIH1cblxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZWxhdGVkIG1vZGVsIGlzbid0IGluc3RhbnRpYXRlZCxcbiAgICAgICAgLy8gaW5zdGFudGlhdGUgaXQgaGVyZVxuICAgICAgICBpZiggISAodGhpcy5yZWxhdGVkIGluc3RhbmNlb2YgQmFzZU1vZGVsKSkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVkID0gbmV3IHRoaXMucmVsYXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50eXBlID09ICdoYXNNYW55JyB8fCB0aGlzLnR5cGUgPT0gJ2hhc09uZScpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRlZC5zZXRVcmkodGhpcy5tb2RlbC5nZXRTZWxmVXJpKCkgKyAnLycgKyB0aGlzLnJlbGF0ZWQuZ2V0VXJpKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAnYmVsb25nc1RvJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVsKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0VXJpKCkge1xuXG4gICAgfVxufSIsImltcG9ydCB7IFJlbGF0aW9uc2hpcCB9IGZyb20gJy4vcmVsYXRpb25zaGlwJztcbmltcG9ydCB7IE1vZGVscyB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5leHBvcnQgY2xhc3MgTW9kZWxGYWN0b3J5IHtcblxuICAgIHN0YXRpYyBtYWtlKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgbW9kZWwoKS5kZXNlcmlhbGl6ZShkYXRhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZUZyb21BcnJheShtb2RlbCwgYXJyYXkpIHtcbiAgICAgICAgbGV0IG1vZGVscyA9IFtdO1xuICAgICAgICBmb3IobGV0IGlpID0gMDsgaWkgPCBhcnJheS5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgICAgIG1vZGVscy5wdXNoKG5ldyBtb2RlbCgpLmRlc2VyaWFsaXplKGFycmF5W2lpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbHM7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha2VSZWxhdGVkKG1vZGVsLCByZWxhdGVkLCBrZXkpIHtcbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcENvbmZpZyA9IG1vZGVsLmdldFJlbGF0aW9uc2hpcChrZXkpO1xuXG4gICAgICAgIGxldCByZWxhdGlvbnNoaXAgPSBuZXcgUmVsYXRpb25zaGlwKG1vZGVsLCByZWxhdGVkLCByZWxhdGlvbnNoaXBDb25maWcudHlwZSk7XG5cbiAgICAgICAgbW9kZWxba2V5XSA9IHJlbGF0aW9uc2hpcC5jcmVhdGUoKTtcblxuICAgICAgICBtb2RlbC5zZXRVcmkobW9kZWxba2V5XS5nZXRTZWxmVXJpKCkgKyAnLycgKyBtb2RlbC5nZXRVcmkoKSk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtlUmVsYXRlZEZyb21SZWxhdGlvbnNoaXAocmVsYXRpb25zaGlwLCBpbnB1dCkge1xuICAgICAgICBpZihyZWxhdGlvbnNoaXAudHlwZSA9PSAnaGFzT25lJyB8fCByZWxhdGlvbnNoaXAudHlwZSA9PSAnYmVsb25nc1RvJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbGF0aW9uc2hpcC5jcmVhdGUoKS5kZXNlcmlhbGl6ZShpbnB1dCk7XG4gICAgICAgIH0gZWxzZSBpZihyZWxhdGlvbnNoaXAudHlwZSA9PSAnaGFzTWFueScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWQgPSByZWxhdGlvbnNoaXAuZ2V0UmVsYXRlZCgpO1xuICAgICAgICAgICAgLy8gbGV0IGNvbnN0cnVjdG9yID0gTW9kZWxzLmdldChyZWxhdGVkLmtleSk7XG4gICAgICAgICAgICByZXR1cm4gTW9kZWxGYWN0b3J5Lm1ha2VGcm9tQXJyYXkocmVsYXRlZCwgaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlbEZhY3RvcnkgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RlbHMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuXG4gICAgcHJvdGVjdGVkIG1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwaTogQXBpU2VydmljZSkge1xuICAgIH1cblxuICAgIC8vIHNldCBtb2RlbFxuICAgIHNldE1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBmaW5kKGlkKSB7XG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KG5ldyBjb25zdHJ1Y3RvcigpLmdldFVyaSgpICsgJy8nICsgaWQpLnBpcGUobWFwKGNsaWVudCA9PiB7XG4gICAgICAgICAgICBjbGllbnQuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlKE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBjbGllbnQuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50O1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2F2ZShkYXRhKSB7XG4gICAgICAgIGlmKGRhdGFbZGF0YS5nZXRLZXkoKV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBkYXRhLnNlcmlhbGl6ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkucHV0KGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoZGF0YSkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IGRhdGEuc2VyaWFsaXplKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KGRhdGEuZ2V0VXJpKCksIHBheWxvYWQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZGVsZXRlKGRhdGEuZ2V0VXJpKCkgKyAnLycgKyBkYXRhW2RhdGEuZ2V0S2V5KCldKTtcbiAgICB9XG5cbiAgICBnZXQobW9kZWwgPSBudWxsLCBvcHRpb25zOiBhbnkgPSB7IHBhZ2U6IDEgfSkge1xuXG5cbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zOiBhbnkgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgICAgfTtcblxuICAgICAgICBpZihvcHRpb25zLnBhZ2UgIT0gMSkge1xuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3BhZ2UnLCBTdHJpbmcob3B0aW9ucy5wYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2JzZXJ2YWJsZTtcblxuICAgICAgICBpZihtb2RlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuYXBpLmdldChuZXcgdGhpcy5tb2RlbCgpLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlID0gdGhpcy5hcGkuZ2V0KG1vZGVsLmdldFVyaSgpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZS5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IE1vZGVsRmFjdG9yeS5tYWtlRnJvbUFycmF5KE1vZGVscy5nZXQodGhpcy5tb2RlbC5rZXkpLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZChyZWxhdGVkLCBrZXksIG1vZGVsID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmKG1vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IE1vZGVscy5nZXQobW9kZWwua2V5KTtcbiAgICAgICAgbW9kZWwgPSBNb2RlbEZhY3RvcnkubWFrZVJlbGF0ZWQobmV3IGNvbnN0cnVjdG9yKCksIHJlbGF0ZWQsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1vZGVsKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7Q09ORklHfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczpcbiAgICBbXG4gICAgICAgIEFwaVNlcnZpY2UsXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hSZXN0TW9kZWxNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hSZXN0TW9kZWxNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiaHR0cCIsInRha2UiLCJJbmplY3RhYmxlIiwiSHR0cENsaWVudCIsIkluamVjdCIsInRzbGliXzEuX192YWx1ZXMiLCJtYXAiLCJIdHRwUGFyYW1zIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBLFFBQWEsTUFBTSxHQUFHLElBQUlBLG1CQUFjLENBQUMsUUFBUSxDQUFDOzs7Ozs7QUNGbEQ7UUFjSSxvQkFBWUMsT0FBZ0IsRUFBa0IsTUFBTTtZQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHQSxPQUFJLENBQUM7O1lBQ2pCLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFFN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCOzs7OztRQUVNLCtCQUFVOzs7O3NCQUFDLEdBQVc7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7OztRQUdoQiwrQkFBVTs7OztnQkFDYixP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