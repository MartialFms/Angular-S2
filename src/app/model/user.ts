import { Customer } from "./customer";

export class User {
  id: number;
  user : Customer;
  password: String;
  isAdmin : boolean;

constructor(id: number, password: String, user : Customer, isAdmin : boolean)
{
this.id=id;
this.user=user;
this.password=password;
this.isAdmin = isAdmin;
}
};
