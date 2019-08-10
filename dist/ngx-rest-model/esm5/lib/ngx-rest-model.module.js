/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ApiService } from "./http/api.service";
import { BackendService } from "./http/backend.service";
import { CONFIG } from "./constants";
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
        { type: NgModule, args: [{
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
export { NgxRestModelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRW5DO0lBQUE7SUFpQkEsQ0FBQzs7Ozs7SUFOaUIsMEJBQU87Ozs7SUFBckIsVUFBc0IsTUFBTTtRQUN4QixPQUFPO1lBQ0gsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQ3BELENBQUM7SUFDTixDQUFDOztnQkFoQkosUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQ1Q7d0JBQ0ksVUFBVTt3QkFDVixjQUFjO3FCQUNqQjtpQkFDSjs7SUFRRCx5QkFBQztDQUFBLEFBakJELElBaUJDO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHtDT05GSUd9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW10sXG4gICAgcHJvdmlkZXJzOlxuICAgIFtcbiAgICAgICAgQXBpU2VydmljZSxcbiAgICAgICAgQmFja2VuZFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFJlc3RNb2RlbE1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neFJlc3RNb2RlbE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfV1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=