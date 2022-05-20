import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './customer/customer/customer.component';

const routes: Routes = [
  { path : 'cart' , component : CartComponent },
  { path : 'topBar' , component : TopComponent },
  { path : 'info' , component : InfoComponent },
  { path : 'navig' , component : NavComponent },
  { path : 'user' , component : UserComponent },
  { path : 'customer' , component : CustomerComponent }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
