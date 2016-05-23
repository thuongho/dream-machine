import { Component } from '@angular/core';
// import { NgForm } from '@angular/common';
import { ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';

@Component({
  selector: 'new-user-form',
  templateUrl: 'app/users/new-user-form.component.html'
})

export class NewUserFormComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required]
    })
  }

  addUser() {
    console.log();
  }
}