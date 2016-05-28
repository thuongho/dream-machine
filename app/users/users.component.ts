import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

// import { User } from './user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'users',
  templateUrl: '/app/users/users.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, UserService]
})

export class UsersComponent implements OnInit {
  // users: User[];
  // error: any;
  users: [Object];

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(users => {
        // console.log(users);
        this.users = users;
      });
    // this._userService.getUsers()
    //   .then(users => this.users = users)
    //   .catch(error => this.error = error);
  }
}