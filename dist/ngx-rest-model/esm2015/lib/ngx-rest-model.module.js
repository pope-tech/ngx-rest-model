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
NgxRestModelModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxRestModelModule });
NgxRestModelModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxRestModelModule_Factory(t) { return new (t || NgxRestModelModule)(); }, providers: [
        ApiService,
        BackendService
    ], imports: [[]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxRestModelModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxhQUFhLENBQUM7O0FBWW5DLE1BQU0sT0FBTyxrQkFBa0I7SUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQ3hCLE9BQU87WUFDSCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDcEQsQ0FBQztJQUNOLENBQUM7O3NEQU5RLGtCQUFrQjttSEFBbEIsa0JBQWtCLG1CQUwzQjtRQUNJLFVBQVU7UUFDVixjQUFjO0tBQ2pCLFlBUFEsRUFBRTtrREFTRixrQkFBa0I7Y0FWOUIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQ1Q7b0JBQ0ksVUFBVTtvQkFDVixjQUFjO2lCQUNqQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHtDT05GSUd9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW10sXG4gICAgcHJvdmlkZXJzOlxuICAgIFtcbiAgICAgICAgQXBpU2VydmljZSxcbiAgICAgICAgQmFja2VuZFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFJlc3RNb2RlbE1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4UmVzdE1vZGVsTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmd4UmVzdE1vZGVsTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==