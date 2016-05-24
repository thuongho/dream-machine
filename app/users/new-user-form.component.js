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
// import { NgForm } from '@angular/common';
var common_1 = require('@angular/common');
var user_service_1 = require('../services/user.service');
var NewUserFormComponent = (function () {
    function NewUserFormComponent(fb, _userService) {
        this._userService = _userService;
        this.newUserForm = fb.group({
            name: ['', common_1.Validators.required],
            email: ['', common_1.Validators.required],
            phone: ['', common_1.Validators.required],
            address: fb.group({
                street: ['', common_1.Validators.required],
                suite: ['', common_1.Validators.required],
                city: ['', common_1.Validators.required],
                zip: ['', common_1.Validators.required]
            })
        });
    }
    NewUserFormComponent.prototype.addUser = function () {
        // console.log(this.newUserForm.value);
        this._userService.saveUser(this.newUserForm.value)
            .subscribe(this.newUserForm.value);
    };
    NewUserFormComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
        if (this.newUserForm.dirty) {
            return confirm('Page has unsaved info, are you sure you want to leave page?');
        }
    };
    NewUserFormComponent = __decorate([
        core_1.Component({
            selector: 'new-user-form',
            templateUrl: 'app/users/new-user-form.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService])
    ], NewUserFormComponent);
    return NewUserFormComponent;
}());
exports.NewUserFormComponent = NewUserFormComponent;
//# sourceMappingURL=new-user-form.component.js.map