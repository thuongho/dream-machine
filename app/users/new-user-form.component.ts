import { CanDeactivate, ComponentInstruction } from '@angular/router-deprecated';
import { Component } from '@angular/core';
// import { NgForm } from '@angular/common';
import { ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';

import { UserService } from '../services/user.service';

@Component({
  selector: 'new-user-form',
  templateUrl: 'app/users/new-user-form.component.html'
})

export class NewUserFormComponent implements CanDeactivate {
  newUserForm: ControlGroup;

  constructor(fb: FormBuilder, private _userService: UserService) {
    this.newUserForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: fb.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      })
    })
  }

  addUser() {
    // console.log(this.newUserForm.value);
    this._userService.saveUser(this.newUserForm.value)
      .subscribe(this.newUserForm.value)
  }

  routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
    if (this.newUserForm.dirty) {
      return confirm('Page has unsaved info, are you sure you want to leave page?');
    }
  }
}