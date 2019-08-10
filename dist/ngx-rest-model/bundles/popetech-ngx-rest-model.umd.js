(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@popetech/ngx-rest-model', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.popetech = global.popetech || {}, global.popetech['ngx-rest-model'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators));
}(this, function (exports, core, http, operators) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CONFIG = new core.InjectionToken('config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @private
         * @param {?} uri
         * @param {?=} bypassPrefix
         * @return {?}
         */
        ApiService.prototype.getUrl = /**
         * @private
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
            if (bypassPrefix === void 0) { bypassPrefix = false; }
            if (options === void 0) { options = {}; }
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
            if (bypassPrefix === void 0) { bypassPrefix = false; }
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
            if (bypassPrefix === void 0) { bypassPrefix = false; }
            /** @type {?} */
            var url = this.getUrl(uri, bypassPrefix);
            return this.http.delete(url).pipe(operators.take(1));
        };
        ApiService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: undefined, decorators: [{ type: core.Inject, args: [CONFIG,] }] }
        ]; };
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @template THIS
         * @this {THIS}
         * @param {?} input
         * @return {THIS}
         */
        BaseModel.prototype.deserialize = /**
         * @template THIS
         * @this {THIS}
         * @param {?} input
         * @return {THIS}
         */
        function (input) {
            var e_1, _a;
            /** @type {?} */
            var config = (/** @type {?} */ (this)).getConfig();
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
                    var relationshipObject = new Relationship((/** @type {?} */ (this)), related, relationshipConfig.type);
                    (/** @type {?} */ (this))[relationship.key] = ModelFactory.makeRelatedFromRelationship(relationshipObject, relationship.value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (relationships_1_1 && !relationships_1_1.done && (_a = relationships_1.return)) _a.call(relationships_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return (/** @type {?} */ (this));
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
            return string.replace(/_\w/g, (/**
             * @param {?} m
             * @return {?}
             */
            function (m) {
                return m[1].toUpperCase();
            }));
        };
        return BaseModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BackendService = /** @class */ (function () {
        function BackendService(api) {
            this.api = api;
        }
        // set model
        // set model
        /**
         * @param {?} model
         * @return {?}
         */
        BackendService.prototype.setModel = 
        // set model
        /**
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
            return this.api.get(new constructor().getUri() + '/' + id).pipe(operators.map((/**
             * @param {?} client
             * @return {?}
             */
            function (client) {
                client.data = ModelFactory.make(Models.get(_this.model.key), client.data);
                return client;
            })));
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
            return observable.pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var data = response.data;
                response.data = ModelFactory.makeFromArray(Models.get(_this.model.key), data);
                return response;
            })));
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
            if (model == null) {
                model = this.model;
            }
            /** @type {?} */
            var constructor = Models.get(model.key);
            model = ModelFactory.makeRelated(new constructor(), related, key);
            return this.get(model);
        };
        BackendService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BackendService.ctorParameters = function () { return [
            { type: ApiService }
        ]; };
        return BackendService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        exports: [],
                        providers: [
                            ApiService,
                            BackendService
                        ]
                    },] }
        ];
        return NgxRestModelModule;
    }());

    exports.ApiService = ApiService;
    exports.BackendService = BackendService;
    exports.BaseModel = BaseModel;
    exports.ModelFactory = ModelFactory;
    exports.Models = Models;
    exports.NgxRestModelModule = NgxRestModelModule;
    exports.Relationship = Relationship;
    exports.ɵa = CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=popetech-ngx-rest-model.umd.js.map
