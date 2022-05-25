import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundError } from 'rxjs';
import { ArticlesComponent } from './components/articles/articles.component';
import { AuthComponent } from './components/user/auth/auth.component';

const routes: Routes = [
  { path : 'articles' , component : ArticlesComponent },
  { path : 'cart' , component : CartComponent },
  { path : 'topBar' , component : TopComponent },
  { path : 'navig' , component : NavComponent },
  { path : 'auth' , component : AuthComponent },
  { path : '404' , component : NotFoundError },
  { path : '**' , redirectTo : '/404' },
  { path : '' , redirectTo : 'articles', pathMatch : 'full' }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
