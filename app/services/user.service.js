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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var UserService = (function () {
    // private handleError(error: any) {
    //   console.log('An error occurred', error);
    //   return Promise.reject(error.message || error);
    // }
    function UserService(_http) {
        this._http = _http;
        this._url = 'http://jsonplaceholder.typicode.com/users';
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    // alt using Promise for getting Users
    // getUsers () : Promise<User[]> {
    //   return this._http.get(this._url)
    //     .toPromise()
    //     .then(response => response.json().data)
    //     .catch(this.handleError);
    // }
    UserService.prototype.saveUser = function (user) {
        // let headers = new Headers({
        //   'Content-Type': 'application/json'
        // });
        // if (user.id) {
        //   return this._http.put(user);
        // }
        // return this._http.post(
        //   this._url,
        //   JSON.stringify(user),
        //   { headers: headers })
        //   .map(res => res.json());
        console.log(user);
        return this._http.post(this._url, JSON.stringify(user))
            .map(function (res) {
            console.log(JSON.stringify(res));
            res.json();
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map