import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { BackendService } from './backend.service';
import {CONFIG} from '../constants';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('BackendService', () => {

    let injector: TestBed;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
    imports: [],
    providers: [
        BackendService,
        ApiService,
        { provide: CONFIG, useValue: { api_root: 'http://api.myapp.dev' } },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
});
    });

    it('should be created', inject([BackendService], (service: BackendService) => {
        expect(service).toBeTruthy();
    }));
});
