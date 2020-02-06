import {ModuleWithProviders, NgModule} from '@angular/core';
import { ApiService } from "./http/api.service";
import { BackendService } from "./http/backend.service";
import {CONFIG} from "./constants";

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers:
    [
        ApiService,
        BackendService
    ]
})
export class NgxRestModelModule {
    public static forRoot(config): ModuleWithProviders<NgxRestModelModule> {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config}]
        };
    }
}
