import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

    customers! : Customer[]
    customer! : Customer
    constructor(public cartService : CartService) { }

    ngOnInit(): void {

    }

    getCustomer(){}

    onSaveCustomer(formValue : Customer){
      console.log(" ajout de " + this.customer);
      const newId = this.customers.length+1
      this.customer = {id: newId ,lastName:formValue.lastName,firstName:formValue.firstName,adress:formValue.adress,phone:formValue.phone,mail:formValue.mail,password:formValue.password,isAdmin:false}

      if (this.checkIfCustomer(this.customer)){this.customers.push(this.customer);
        alert("Nouveau client ajouté")
      }
      else{alert("Ce mail est déja utilisé")}
      console.log(this.customers);
    }

    checkIfCustomer(targetCustomer : Customer){
      let validate = true;
      for(let i =0; i < this.customers.length; i++)
      {if (this.customers[i].mail == targetCustomer.mail) validate = false; }
      return validate;
    }
}
