import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  articles : Article[] | undefined;
  article!: Article;
  storageKey : string = "cartValue";
  totalCart=0;
  tva!:number;
  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit() {
    this.articles=this.cartService.cartArticles;
    this.totalCart=this.getTotal();
    this.tva=this.tvaCollector();
  }

  storeCart() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.articles));

  }

  restoreCart() {
    this.articles = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  updateCart(){
    this.cartService.updateCart(this.article?.id, this.article?.qty);
    this.storeCart();
      }

  getTotal(){
    let total = 0;
    for (var i = 0; i < this.articles!.length; i++) {
        if (this.articles![i].qty) {
            total += this.articles![i].price*this.articles![i].qty;
            this.totalCart = total;
        }
    }
    return total
  }

  tvaCollector(){
    let tva=0;
    tva = this.totalCart*0.206
    return tva;
  }

  }


