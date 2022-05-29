import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  changeValue!: string;
  articles: Article[] | undefined;
  error=null;
  constructor(private cartService: CartService, private router: Router, private articleService : ArticleService) {}

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleService.getArticles().subscribe({
      next: (data) => this.articles = data,
      error: (err) => this.error = err.message,
      complete:() => this.error = null
    });
  }
  addToCart(articleId: number, quantity: number) {
    this.cartService.updateCart(articleId, quantity);
    // this.router.navigateByUrl('cart');
    console.log(this.articles);
    console.log(quantity);
  }

  changeBtn(quantity: number) {
    if (quantity > 0) {
      this.changeValue = 'Retirer du panier!';
      return 'red';
    } else {
      this.changeValue = 'Ajouter au panier';
      return 'green';
    }
  }
}
