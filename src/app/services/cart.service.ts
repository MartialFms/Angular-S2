import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})



export class CartService {

  cartArticles!: Article[];
  article : Article | undefined;
  totalCart : number | undefined;
  customer : Customer | undefined;


  constructor() { }



updateArticles(articles : Article[]){
  console.log(articles);
  this.cartArticles=articles;
}

updateCart(id:number, quantity:number){
  // let targetArticle = this.cartArticles.find(item => item.id === id);
  // if(quantity > 0){targetArticle.qty+=quantity }
  // else if(quantity < 0){targetArticle.qty+=quantity- }
  // else{targetArticle.qty=quantity}

}

getTotal(){
  let total = 0;
  for (var i = 0; i < this.cartArticles!.length; i++) {
      if (this.cartArticles![i].qty) {
          total += this.cartArticles![i].price*this.cartArticles![i].qty;
          this.totalCart = total;
      }
  }
}

clearCart(articles:Article[]){

}

getCustomer(){

}
}


