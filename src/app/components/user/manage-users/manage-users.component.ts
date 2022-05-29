import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  title = 'appBootstrap';
  closeResult!: string;


  changeValue!: string;
  users: User[] | undefined;
  editMode : boolean = false;
  userListSize: number | undefined;
  error=null;
  constructor(private cartService: CartService, private modalService: NgbModal, private router: Router, private userService : UserService, private offcanvasService: NgbOffcanvas) {}

  ngOnInit() {
    this.userListSize = this.users?.length;
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => this.error = err.message,
      complete:() => this.error = null
    });
  }


  onCreateUser(content: TemplateRef<any>){
    this.offcanvasService.open(content, { position: 'start', backdropClass: 'bg-info' });
  }

  createUser(user : User){
    this.userService.createUser(user);
  }

  onEditUser(content: TemplateRef<any>){
    this.offcanvasService.open(content, { position: 'end', backdropClass: 'bg-success'  });
  }

  editUser(user : User){
    console.log(user);
  }

  onDeleteUser(content: any){}

  deleteUser(user:User){this.userService.deleteUser(user);

  }

  test(content : any){
console.log(content);
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
