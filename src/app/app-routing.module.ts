import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundError } from 'rxjs';
import { AuthComponent } from './components/user/auth/auth.component';
import { ModalComponent } from './test/modal/modal.component';
import { UserComponent } from './components/user/user/user.component';
import { CustomerComponent } from './components/user/customer/customer.component';
import { ArticlesComponent } from './components/articles/articles/articles.component';

const routes: Routes = [
  { path : 'articles' , component : ArticlesComponent },
  { path : 'cart' , component : CartComponent },
  { path : 'topBar' , component : TopComponent },
  { path : 'navig' , component : NavComponent },
  { path : 'auth' , component : AuthComponent },
  { path : 'modal' , component : ModalComponent },
  { path : 'user' , component : UserComponent },
  { path : 'customer' , component : CustomerComponent },
  { path : 'auth' , component : AuthComponent }
  // { path : '404' , component : NotFoundError },
  // { path : '**' , redirectTo : '/404' },
  // { path : '' , redirectTo : 'articles', pathMatch : 'full' }
  // { path : '**' , redirectTo : '/404' }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
