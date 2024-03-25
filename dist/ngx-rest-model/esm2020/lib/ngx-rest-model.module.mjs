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
NgxRestModelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxRestModelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxRestModelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgxRestModelModule });
NgxRestModelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxRestModelModule, providers: [
        ApiService,
        BackendService
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgxRestModelModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXJlc3QtbW9kZWwvc3JjL2xpYi9uZ3gtcmVzdC1tb2RlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sYUFBYSxDQUFDOztBQVluQyxNQUFNLE9BQU8sa0JBQWtCO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUN4QixPQUFPO1lBQ0gsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQ3BELENBQUM7SUFDTixDQUFDOzsrR0FOUSxrQkFBa0I7Z0hBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGFBTDNCO1FBQ0ksVUFBVTtRQUNWLGNBQWM7S0FDakI7MkZBRVEsa0JBQWtCO2tCQVY5QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQ1Q7d0JBQ0ksVUFBVTt3QkFDVixjQUFjO3FCQUNqQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7Q09ORklHfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczpcbiAgICBbXG4gICAgICAgIEFwaVNlcnZpY2UsXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hSZXN0TW9kZWxNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neFJlc3RNb2RlbE1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neFJlc3RNb2RlbE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfV1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=