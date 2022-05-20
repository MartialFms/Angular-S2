import { FormStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers! : Customer[]
  customer! : Customer
  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    this.customers = [
      {id:1,lastName:"Derand",firstName:"Martial",adress:"2 rue de mon cul",phone:"0608046526",mail:"md@fms.com"},
      {id:2,lastName:"Laclau",firstName:"Tristan",adress :"15 rue jesaipahou",phone:"0785648689",mail:"tl@fms.com"},
      {id:3,lastName:"Lefort",firstName:"Sarah",adress :"89 avenue des machins",phone:"0684256474",mail:"sl@fms.com"}
    ];
  }

  getCustomer(){}

  onSaveCustomer(customer : Customer){console.log(customer);
    this.customers.push(this.customer)
  }


}


