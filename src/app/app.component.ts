import { Component } from '@angular/core';
import { ArticlesComponent } from './components/articles/articles.component';
import { AuthComponent } from './components/user/auth/auth.component';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-shop';
  menu: number= 1;

  constructor(private authComponent : AuthComponent) {}


  showModal(){this.authComponent.showModal();

  }
}
