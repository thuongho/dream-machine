import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { UserService } from '../services/user.service';

@Component({
  selector: 'users',
  templateUrl: '/app/users/users.component.html',
  providers: [HTTP_PROVIDERS, UserService]
})

export class UsersComponent implements OnInit {
  users = [Object];

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(users => {
        // console.log(users);
        this.users = users;
      });
  }
}