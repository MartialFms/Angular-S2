export class User {
  id: number;
  login : string;
  email: String;
  password: String;
  isAdmin : boolean;

constructor(id: number, login: string,email:string, password: String,isAdmin : boolean)
{
this.id=id;
this.login=login;
this.email=email;
this.password=password;
this.isAdmin = isAdmin;
}
};
