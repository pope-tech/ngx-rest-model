import { NgModule } from '@angular/core';
import { ApiService } from "./http/api.service";
import { BackendService } from "./http/backend.service";
import { CONFIG } from "./constants";
import * as i0 from "@angular/core";
var NgxRestModelModule = /** @class */ (function () {
    function NgxRestModelModule() {
    }
    NgxRestModelModule.forRoot = function (config) {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    };
    NgxRestModelModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxRestModelModule });
    NgxRestModelModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxRestModelModule_Factory(t) { return new (t || NgxRestModelModule)(); }, providers: [
            ApiService,
            BackendService
        ], imports: [[]] });
    return NgxRestModelModule;
}());
export { NgxRestModelModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxhQUFhLENBQUM7O0FBRW5DO0lBQUE7S0FpQkM7SUFOaUIsMEJBQU8sR0FBckIsVUFBc0IsTUFBTTtRQUN4QixPQUFPO1lBQ0gsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQ3BELENBQUM7SUFDTixDQUFDOzBEQU5RLGtCQUFrQjt1SEFBbEIsa0JBQWtCLG1CQUwzQjtZQUNJLFVBQVU7WUFDVixjQUFjO1NBQ2pCLFlBUFEsRUFBRTs2QkFOZjtDQXNCQyxBQWpCRCxJQWlCQztTQVBZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBVjlCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUNUO29CQUNJLFVBQVU7b0JBQ1YsY0FBYztpQkFDakI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7Q09ORklHfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczpcbiAgICBbXG4gICAgICAgIEFwaVNlcnZpY2UsXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hSZXN0TW9kZWxNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neFJlc3RNb2RlbE1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neFJlc3RNb2RlbE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfV1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=