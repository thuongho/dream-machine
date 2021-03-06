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
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
// import { User } from './user';
var user_service_1 = require('../services/user.service');
var UsersComponent = (function () {
    function UsersComponent(_userService) {
        this._userService = _userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) {
            // console.log(users);
            _this.users = users;
        });
        // this._userService.getUsers()
        //   .then(users => this.users = users)
        //   .catch(error => this.error = error);
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: '/app/users/users.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map