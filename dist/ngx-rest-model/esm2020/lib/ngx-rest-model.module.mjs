import { NgModule } from '@angular/core';
import { ApiService } from "./http/api.service";
import { BackendService } from "./http/backend.service";
import { CONFIG } from "./constants";
import * as i0 from "@angular/core";
export class NgxRestModelModule {
    static forRoot(config) {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    }
}
NgxRestModelModule.ɵfac = function NgxRestModelModule_Factory(t) { return new (t || NgxRestModelModule)(); };
NgxRestModelModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxRestModelModule });
NgxRestModelModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        ApiService,
        BackendService
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxRestModelModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXJlc3QtbW9kZWwvc3JjL2xpYi9uZ3gtcmVzdC1tb2RlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sYUFBYSxDQUFDOztBQVluQyxNQUFNLE9BQU8sa0JBQWtCO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUN4QixPQUFPO1lBQ0gsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQ3BELENBQUM7SUFDTixDQUFDOztvRkFOUSxrQkFBa0I7b0VBQWxCLGtCQUFrQjt5RUFMM0I7UUFDSSxVQUFVO1FBQ1YsY0FBYztLQUNqQjt1RkFFUSxrQkFBa0I7Y0FWOUIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQ1Q7b0JBQ0ksVUFBVTtvQkFDVixjQUFjO2lCQUNqQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHtDT05GSUd9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW10sXG4gICAgcHJvdmlkZXJzOlxuICAgIFtcbiAgICAgICAgQXBpU2VydmljZSxcbiAgICAgICAgQmFja2VuZFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFJlc3RNb2RlbE1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4UmVzdE1vZGVsTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmd4UmVzdE1vZGVsTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==