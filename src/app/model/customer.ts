export class Customer {
  id: number;
  lastName: string;
  firstName: string;
  adress : string;
  phone: string;
  mail: string;
  password: string;
  isAdmin : boolean;

constructor(  id: number,  lastName: string,  firstName: string,  adress : string,  phone: string,  mail: string, password: string, isAdmin : boolean)
{
this.id = id;
this.lastName=lastName;
this.firstName=firstName;
this.adress=adress;
this.phone=phone;
this.mail=mail;
this.password=password;
this.isAdmin = isAdmin;
}

};
