import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.css']
})
export class ManageArticleComponent implements OnInit {
  title = 'appBootstrap';
  closeResult!: string;


  changeValue!: string;
  articles: Article[] | undefined;
  editMode : boolean = false;
  articleListSize: number | undefined;
  error=null;
  constructor(private cartService: CartService, private modalService: NgbModal, private router: Router, private articleService : ArticleService, private offcanvasService: NgbOffcanvas) {}

  ngOnInit() {
    this.articleListSize = this.articles?.length;
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleService.getArticles().subscribe({
      next: (data) => this.articles = data,
      error: (err) => this.error = err.message,
      complete:() => this.error = null
    });
  }


  onCreateArticle(content: TemplateRef<any>){
    this.offcanvasService.open(content, { position: 'start', backdropClass: 'bg-info' });
  }

  createArticle(article : Article){
    console.log(article);
  }

  onEditArticle(content: TemplateRef<any>){
    this.offcanvasService.open(content, { position: 'end', backdropClass: 'bg-success'  });
  }

  editArticle(article : Article){
    console.log(article);
  }

  deleteArticle(){

  }


  changeEditBtn(editMode: boolean) {
    if (editMode = true) {
      this.changeValue = 'Valider';
      return 'green';}
      if (editMode = false) {
      this.changeValue = 'Editer';
      return 'red';
    }
    return null;
  }



  // addToCart(articleId: number, quantity: number) {
  //   this.cartService.updateCart(articleId, quantity);
  //   // this.router.navigateByUrl('cart');
  //   console.log(this.articles);
  //   console.log(quantity);
  // }

  onDeleteArticle(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
