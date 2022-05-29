import { Component } from '@angular/core';

import { AuthComponent } from './components/user/auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-shop';
  menu: number= 1;

  constructor() {}

  goPage(pageRef: number){
    this.menu = pageRef;
  }
}
