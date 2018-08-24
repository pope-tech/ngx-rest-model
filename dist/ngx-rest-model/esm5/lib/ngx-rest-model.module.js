/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                },] },
    ];
    return NgxRestModelModule;
}());
export { NgxRestModelModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7OztJQWFqQiwwQkFBTzs7OztjQUFDLE1BQU07UUFDeEIsTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQ3BELENBQUM7OztnQkFmVCxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFDVDt3QkFDSSxVQUFVO3dCQUNWLGNBQWM7cUJBQ2pCO2lCQUNKOzs2QkFkRDs7U0FlYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NPTkZJR30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBwcm92aWRlcnM6XG4gICAgW1xuICAgICAgICBBcGlTZXJ2aWNlLFxuICAgICAgICBCYWNrZW5kU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4UmVzdE1vZGVsTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmd4UmVzdE1vZGVsTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==