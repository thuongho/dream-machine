import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {HeaderComponent} from './header/header.component';

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersComponent
  },
  {
    path: '/goals',
    name: 'Goals',
    component: GoalsComponent
  }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      HeaderComponent
    ],
    providers: [ROUTER_PROVIDERS]
})

export class AppComponent { }
