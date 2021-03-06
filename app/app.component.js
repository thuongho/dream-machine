"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var goals_component_1 = require('./goals/goals.component');
var header_component_1 = require('./header/header.component');
var home_component_1 = require('./home/home.component');
var new_user_form_component_1 = require('./users/new-user-form.component');
var users_component_1 = require('./users/users.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/users',
                name: 'Users',
                component: users_component_1.UsersComponent
            },
            {
                path: '/goals',
                name: 'Goals',
                component: goals_component_1.GoalsComponent
            },
            {
                path: '/new',
                name: 'New',
                component: new_user_form_component_1.NewUserFormComponent
            },
            {
                path: '*other',
                name: 'Other',
                redirectTo: ['Home']
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                header_component_1.HeaderComponent
            ],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map