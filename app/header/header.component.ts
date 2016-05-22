import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  selector: 'dream-header',
  templateUrl: 'app/header/header.component.html',
  styles: [`
    .router-link-active {
      background-color: #178acc;
    }
  `]
  directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {

}