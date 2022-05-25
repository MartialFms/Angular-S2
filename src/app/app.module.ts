import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CartComponent } from './components/cart/cart.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/user/customer/customer.component';
import { AuthComponent } from './components/user/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CartComponent,
    TopComponent,
    NavComponent,
    CustomerComponent,
    AuthComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
