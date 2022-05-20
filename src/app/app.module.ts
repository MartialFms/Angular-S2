import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CartComponent } from './components/cart/cart.component';
import { InfoComponent } from './components/info/info.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './customer/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CartComponent,
    InfoComponent,
    TopComponent,
    NavComponent,
    UserComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
