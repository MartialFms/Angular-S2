import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/user/customer/customer.component';
import { AuthComponent } from './components/user/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './test/modal/modal.component';
import { UserComponent } from './components/user/user/user.component';
import { ManageArticleComponent } from './components/articles/manage-article/manage-article.component';
import { ManageUsersComponent } from './components/user/manage-users/manage-users.component';
import { ArticlesComponent } from './components/articles/articles/articles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CartComponent,
    TopComponent,
    NavComponent,
    CustomerComponent,
    AuthComponent,
    ModalComponent,
    UserComponent,
    ManageArticleComponent,
    ManageUsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModule
  ],
  providers: [
    AuthComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
