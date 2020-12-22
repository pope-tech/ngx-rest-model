import { NgModule } from '@angular/core';
import { ApiService } from "./http/api.service";
import { BackendService } from "./http/backend.service";
import { CONFIG } from "./constants";
export class NgxRestModelModule {
    static forRoot(config) {
        return {
            ngModule: NgxRestModelModule,
            providers: [{ provide: CONFIG, useValue: config }]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc3QtbW9kZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25neC1yZXN0LW1vZGVsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcmVzdC1tb2RlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBWW5DLE1BQU0sT0FBTyxrQkFBa0I7SUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQ3hCLE9BQU87WUFDSCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDcEQsQ0FBQztJQUNOLENBQUM7OztZQWhCSixRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFDVDtvQkFDSSxVQUFVO29CQUNWLGNBQWM7aUJBQ2pCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi9odHRwL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2h0dHAvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NPTkZJR30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBwcm92aWRlcnM6XG4gICAgW1xuICAgICAgICBBcGlTZXJ2aWNlLFxuICAgICAgICBCYWNrZW5kU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4UmVzdE1vZGVsTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hSZXN0TW9kZWxNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hSZXN0TW9kZWxNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19