var NgxRestModelModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ApiService } from "./http/api.service";
import { BackendService } from "./http/backend.service";
import { CONFIG } from "./constants";
let NgxRestModelModule = NgxRestModelModule_1 = class NgxRestModelModule {
    static forRoot(config) {
        return {
            ngModule: NgxRestModelModule_1,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    }
};
NgxRestModelModule = NgxRestModelModule_1 = __decorate([
    NgModule({
        imports: [],
        declarations: [],
        exports: [],
        providers: [
            ApiService,
            BackendService
        ]
    })
], NgxRestModelModule);
export { NgxRestModelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvcGV0ZWNoL25neC1yZXN0LW1vZGVsLyIsInNvdXJjZXMiOlsibGliL25neC1yZXN0LW1vZGVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQVluQyxJQUFhLGtCQUFrQiwwQkFBL0IsTUFBYSxrQkFBa0I7SUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQ3hCLE9BQU87WUFDSCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDcEQsQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBUFksa0JBQWtCO0lBVjlCLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxFQUFFO1FBQ1gsWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFFLEVBQUU7UUFDWCxTQUFTLEVBQ1Q7WUFDSSxVQUFVO1lBQ1YsY0FBYztTQUNqQjtLQUNKLENBQUM7R0FDVyxrQkFBa0IsQ0FPOUI7U0FQWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NPTkZJR30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBwcm92aWRlcnM6XG4gICAgW1xuICAgICAgICBBcGlTZXJ2aWNlLFxuICAgICAgICBCYWNrZW5kU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4UmVzdE1vZGVsTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hSZXN0TW9kZWxNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hSZXN0TW9kZWxNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19