(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@popetech/ngx-rest-model', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.popetech = global.popetech || {}, global.popetech['ngx-rest-model'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators));
}(this, (function (exports, core, http, operators) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

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

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var CONFIG = new core.InjectionToken('config');

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
                return this.http.get(url, options).pipe(operators.take(1));
            }
            return this.http.get(url).pipe(operators.take(1));
        };
        ApiService.prototype.post = function (uri, payload, bypassPrefix, options) {
            if (bypassPrefix === void 0) { bypassPrefix = false; }
            if (options === void 0) { options = {}; }
            var url = this.getUrl(uri, bypassPrefix);
            if (options != {}) {
                return this.http.post(url, payload, options).pipe(operators.take(1));
            }
            return this.http.post(url, payload).pipe(operators.take(1));
        };
        ApiService.prototype.put = function (uri, payload, bypassPrefix) {
            if (bypassPrefix === void 0) { bypassPrefix = false; }
            var url = this.getUrl(uri, bypassPrefix);
            return this.http.put(url, payload).pipe(operators.take(1));
        };
        ApiService.prototype.delete = function (uri, options, bypassPrefix) {
            if (options === void 0) { options = {}; }
            if (bypassPrefix === void 0) { bypassPrefix = false; }
            var url = this.getUrl(uri, bypassPrefix);
            return this.http.delete(url).pipe(operators.take(1));
        };
        ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(core["ɵɵinject"](http.HttpClient), core["ɵɵinject"](CONFIG)); };
        ApiService.ɵprov = core["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
        return ApiService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ApiService, [{
            type: core.Injectable
        }], function () { return [{ type: http.HttpClient }, { type: undefined, decorators: [{
                    type: core.Inject,
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
            return this.api.get(new constructor().getUri() + '/' + id).pipe(operators.map(function (client) {
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
                params: new http.HttpParams()
            };
            if (options.page != 1) {
                requestOptions.params = new http.HttpParams().set('page', String(options.page));
            }
            var observable;
            if (model === null) {
                observable = this.api.get(new this.model().getUri(), requestOptions);
            }
            else {
                observable = this.api.get(model.getUri(), requestOptions);
            }
            return observable.pipe(operators.map(function (response) {
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
        BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(core["ɵɵinject"](ApiService)); };
        BackendService.ɵprov = core["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac });
        return BackendService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](BackendService, [{
            type: core.Injectable
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
        NgxRestModelModule.ɵmod = core["ɵɵdefineNgModule"]({ type: NgxRestModelModule });
        NgxRestModelModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function NgxRestModelModule_Factory(t) { return new (t || NgxRestModelModule)(); }, providers: [
                ApiService,
                BackendService
            ], imports: [[]] });
        return NgxRestModelModule;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NgxRestModelModule, [{
            type: core.NgModule,
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

    exports.ApiService = ApiService;
    exports.BackendService = BackendService;
    exports.BaseModel = BaseModel;
    exports.ModelFactory = ModelFactory;
    exports.Models = Models;
    exports.NgxRestModelModule = NgxRestModelModule;
    exports.Relationship = Relationship;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=popetech-ngx-rest-model.umd.js.map
