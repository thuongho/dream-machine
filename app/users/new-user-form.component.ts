import { CanDeactivate, ComponentInstruction } from '@angular/router-deprecated';
import { Component } from '@angular/core';
// import { NgForm } from '@angular/common';
import { ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
// import { Router } from '@angular/router';


import { UserService } from '../services/user.service';

@Component({
  selector: 'new-user-form',
  templateUrl: 'app/users/new-user-form.component.html',
  // providers: [Router, UserService]
  providers: [HTTP_PROVIDERS, UserService]
})

export class NewUserFormComponent implements CanDeactivate {
  newUserForm: ControlGroup;

  constructor(
    fb: FormBuilder,
    // private _router: Router,
    private _userService: UserService
  ) {
    this.newUserForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      address: fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zip: ['']
      })
    })
  }

  addUser() {
    // console.log(this.newUserForm.value);
    this._userService.saveUser(this.newUserForm.value)
      .subscribe(x => {
        // this.form.markAsPristine();
        // this._router.navigate(['Users']);
      });
  }

  routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
    if (this.newUserForm.dirty) {
      return confirm('Page has unsaved info, are you sure you want to leave page?');
    }
    return true;
  }
}