import { ApiService } from './api.service';
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class BackendService {
    protected api: ApiService;
    protected model: any;
    constructor(api: ApiService);
    setModel(model: any): void;
    find(id: any): any;
    save(data: any): any;
    update(data: any): Observable<Object>;
    createNew(data: any): any;
    destroy(data: any): Observable<Object>;
    get(model?: any, options?: any): any;
    getRelated(related: any, key: any, model?: any, options?: {}): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackendService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BackendService>;
}
//# sourceMappingURL=backend.service.d.ts.map