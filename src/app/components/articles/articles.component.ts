import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
quantity : number = 0;
changeValue! : string;
articles : Article[] | undefined;
constructor(private cartService : CartService, private router : Router){}

  ngOnInit() {
    this.articles = [
      {id:1,name:"C++",desc:"Formation en C et C++ sur 4 jours",price:120,pict:"assets/img/c.png",qty:0},                 // test 2
      {id:2,name:"Java Script",desc:"Formation sur Javascript sur 2 jours",price:80,pict:"assets/img/js.png",qty:0},
      {id:3,name:"PHP",desc:"Formation à Php sur 3 jours",price:100,pict:"assets/img/ph.png",qty:0},
      {id:4,name:"Python",desc: "Formation Python et Django sur 5 jours",price:180,pict:"assets/img/py.png",qty:0},
      {id:5,name:"JAVA",desc:"Formation de Java SE 8 sur 5 jours",price:240,pict:"assets/img/jv.png",qty:0}
    ];

    this.cartService.updateArticles(this.articles)

  }


   addToCart(articleId:number, quantity:number){
 this.cartService.updateCart(articleId, quantity);
// this.router.navigateByUrl('cart');
   }

   changeBtn(){

    if(this.quantity<0){this.changeValue="Retirer du panier!"; return 'red'}
    else {this.changeValue="Ajouter au panier"; return 'green'}
   }
}
