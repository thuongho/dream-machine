import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { User } from '../users/user';

@Injectable()

export class UserService {
  private _url = 'http://jsonplaceholder.typicode.com/users';

  // private handleError(error: any) {
  //   console.log('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }

  constructor(private _http: Http) {}

  getUsers() {
    return this._http.get(this._url)
      .map(res => res.json());
  }

  // alt using Promise for getting Users
  // getUsers () : Promise<User[]> {
  //   return this._http.get(this._url)
  //     .toPromise()
  //     .then(response => response.json().data)
  //     .catch(this.handleError);
  // }

  saveUser(user: User) {
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
      .map(res => {
        console.log(JSON.stringify(res));
        res.json()
      });
  }
}