import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";

import { ApiService } from './api.service';
import { ModelFactory } from '../models/model.factory';
import { Models } from "../models/models";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class BackendService {


    protected model;

    constructor(protected api: ApiService) {
    }

    // set model
    setModel(model) {
        this.model = model;
    }

    find(id) {
        let constructor = Models.get(this.model.key);
        return this.api.get(new constructor().getUri() + '/' + id).pipe(map((client: any) => {
            client.data = ModelFactory.make(Models.get(this.model.key), client.data);
            return client;
        }));
    }

    save(data) {
        if(data[data.getKey()]) {
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

    get(model = null, options: any = { page: 1 }) {


        let requestOptions: any = {
            params: new HttpParams()
        };

        if(options.page != 1) {
            requestOptions.params = new HttpParams().set('page', String(options.page));
        }

        let observable;

        if(model === null) {
            observable = this.api.get(new this.model().getUri(), requestOptions);
        } else {
            observable = this.api.get(model.getUri(), requestOptions);
        }

        return observable.pipe(
                map((response: any) => {
                    let data = response.data;
                    response.data = ModelFactory.makeFromArray(Models.get(this.model.key), data);
                    return response;
                })
        );
    }

    getRelated(related, key, model = null, options = {}) {
        if(model == null) {
            model = this.model;
        }

        let constructor = Models.get(model.key);
        model = ModelFactory.makeRelated(new constructor(), related, key);

        return this.get(model);
    }

}
