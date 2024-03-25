import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import { take, map } from 'rxjs/operators';
import * as i1 from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

const CONFIG = new InjectionToken('config');

class ApiService {
    constructor(http, config) {
        this.http = http;
        const root = config.api_root;
        this.setBaseUrl(root);
        this.setApiRoot(root);
    }
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    setApiRoot(url) {
        this.apiRoot = url;
    }
    getApiRoot() {
        return this.apiRoot;
    }
    getUrl(uri, bypassPrefix = false) {
        if (!bypassPrefix) {
            return this.getBaseUrl() + '/' + uri;
        }
        return this.getApiRoot() + '/' + uri;
    }
    get(uri, options = {}, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.get(url, options).pipe(take(1));
        }
        return this.http.get(url).pipe(take(1));
    }
    post(uri, payload, bypassPrefix = false, options = {}) {
        let url = this.getUrl(uri, bypassPrefix);
        if (options != {}) {
            return this.http.post(url, payload, options).pipe(take(1));
        }
        return this.http.post(url, payload).pipe(take(1));
    }
    put(uri, payload, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.put(url, payload).pipe(take(1));
    }
    delete(uri, options = {}, bypassPrefix = false) {
        let url = this.getUrl(uri, bypassPrefix);
        return this.http.delete(url).pipe(take(1));
    }
}
ApiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ApiService, deps: [{ token: i1.HttpClient }, { token: CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
ApiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ApiService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ApiService, decorators: [{
            type: Injectable
        }], ctorParameters: function () {
        return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [CONFIG]
                    }] }];
    } });

class Models {
    static add(model) {
        let modelName = new model().constructor.name.toLowerCase();
        if (!Models.models[modelName]) {
            Models.models[modelName] = model;
        }
    }
    static get(model) {
        return Models.models[model];
    }
}
Models.models = {};

class BaseModel {
    constructor() {
        this.modelConfig = {
            key: '',
            uri: '',
            hidden: [],
            relationships: {}
        };
    }
    setConfig(config) {
        this.modelConfig = Object.assign(Object.assign({}, this.getConfig()), config);
    }
    getConfig() {
        return this.modelConfig;
    }
    getUri() {
        return this.modelConfig.uri;
    }
    getSelfUri() {
        return this.modelConfig.uri + '/' + this[this.modelConfig.key];
    }
    setUri(uri) {
        this.modelConfig.uri = uri;
    }
    getKey() {
        return this.modelConfig.key;
    }
    getRelationship(key) {
        return this.modelConfig.relationships[key];
    }
    deserialize(input) {
        let config = this.getConfig();
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
            let relationshipConfig = config.relationships[relationship.key];
            let related = Models.get(relationshipConfig.model);
            let relationshipObject = new Relationship(this, related, relationshipConfig.type);
            this[relationship.key] = ModelFactory.makeRelatedFromRelationship(relationshipObject, relationship.value);
        }
        return this;
    }
    snakeToCamel(string) {
        return string.replace(/_\w/g, function (m) {
            return m[1].toUpperCase();
        });
    }
}

class Relationship {
    constructor(model, related, type) {
        this.model = model;
        this.related = related;
        this.type = type;
    }
    setRelated(related) {
        this.related = related;
    }
    getRelated() {
        return this.related;
    }
    setModel(model) {
        this.model = model;
    }
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
    getModel() {
    }
    getUri() {
    }
}

class ModelFactory {
    static make(model, data) {
        return new model().deserialize(data);
    }
    static makeFromArray(model, array) {
        let models = [];
        for (let ii = 0; ii < array.length; ++ii) {
            models.push(new model().deserialize(array[ii]));
        }
        return models;
    }
    static makeRelated(model, related, key) {
        let relationshipConfig = model.getRelationship(key);
        let relationship = new Relationship(model, related, relationshipConfig.type);
        model[key] = relationship.create();
        model.setUri(model[key].getSelfUri() + '/' + model.getUri());
        return model;
    }
    static makeRelatedFromRelationship(relationship, input) {
        if (relationship.type == 'hasOne' || relationship.type == 'belongsTo') {
            return relationship.create().deserialize(input);
        }
        else if (relationship.type == 'hasMany') {
            const related = relationship.getRelated();
            // let constructor = Models.get(related.key);
            return ModelFactory.makeFromArray(related, input);
        }
    }
}

class BackendService {
    constructor(api) {
        this.api = api;
    }
    // set model
    setModel(model) {
        this.model = model;
    }
    find(id) {
        let constructor = Models.get(this.model.key);
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map((client) => {
            client.data = ModelFactory.make(Models.get(this.model.key), client.data);
            return client;
        }));
    }
    save(data) {
        if (data[data.getKey()]) {
            return this.update(data);
        }
        return this.createNew(data);
    }
    update(data) {
        let payload = data.serialize();
        return this.api.put(data.getUri() + '/' + data[data.getKey()], payload);
    }
    createNew(data) {
        let payload = data.serialize();
        return this.api.post(data.getUri(), payload);
    }
    destroy(data) {
        return this.api.delete(data.getUri() + '/' + data[data.getKey()]);
    }
    get(model = null, options = { page: 1 }) {
        let requestOptions = {
            params: new HttpParams()
        };
        if (options.page != 1) {
            requestOptions.params = new HttpParams().set('page', String(options.page));
        }
        let observable;
        if (model === null) {
            observable = this.api.get(new this.model().getUri(), requestOptions);
        }
        else {
            observable = this.api.get(model.getUri(), requestOptions);
        }
        return observable.pipe(map((response) => {
            let data = response.data;
            response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
            return response;
        }));
    }
    getRelated(related, key, model = null, options = {}) {
        if (model == null) {
            model = this.model;
        }
        let constructor = Models.get(model.key);
        model = ModelFactory.makeRelated(new constructor(), related, key);
        return this.get(model);
    }
}
BackendService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BackendService, deps: [{ token: ApiService }], target: i0.ɵɵFactoryTarget.Injectable });
BackendService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BackendService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: BackendService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ApiService }]; } });

class NgxRestModelModule {
    static forRoot(config) {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    }
}
NgxRestModelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxRestModelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxRestModelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxRestModelModule });
NgxRestModelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxRestModelModule, providers: [
        ApiService,
        BackendService
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxRestModelModule, decorators: [{
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
        }] });

;

/*
 * Public API Surface of ngx-rest-model
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApiService, BackendService, BaseModel, ModelFactory, Models, NgxRestModelModule, Relationship };
//# sourceMappingURL=popetech-ngx-rest-model.mjs.map
