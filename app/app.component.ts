import {Component} from '@angular/core';

import {HeaderComponent} from './header/header.component';

@Component({
    selector: 'my-app',
    template: `
      <dream-header></dream-header>
      <h1>My First Angular 2 App</h1>
    `,
    directives: [HeaderComponent]
})

export class AppComponent { }
