import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder ,ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit {
  userForm: FormGroup;
  user: any;
  validatingForm: any;

  @ViewChild ('frame') public modal: any;

  constructor(public userService : UserService, private formBuilder : FormBuilder) {

let user = this.userService.getUsers();


this.userForm = new FormGroup({
  login: new FormControl(user),
  password:new FormControl(user),
  isAdmin:new FormControl(user)
})

// this.userForm = new FormGroup({
//   login: new FormControl(user.email=),
//   password:new FormControl(user.password),
//   isAdmin:new FormControl(user.isAdmin)
// })

  }

  ngOnInit(): void {

    // loginFormModalEmail: new FormControl('', Validators.email),
    // loginFormModalPassword: new FormControl('', Validators.required)
    this.userForm = this.formBuilder.group({
      login: [this.user.login, Validators.required,Validators.pattern('[a-z0-9@]*')],
      password: [this.user.password, Validators.required]
    })
  }

  showModal(){this.modal.show()}

  hideModal(){this.modal.hide()}

  onUserLogin(userForm : FormGroup){
    console.log(this.userForm.value);
  }

}

