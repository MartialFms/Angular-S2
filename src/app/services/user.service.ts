import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get<User[]>(environment.host+"/users")
}

public createUser(user : User){
  return this.http.post(environment.host+"/users/register", user)
}


public deleteUser(user : User){
return this.http.delete(environment.host+"/users/"+user.id )}

// //  *** a refaire ***
// public createUser(user : User){
//   const headers = { 'content-type': 'application/json'};
//   console.log(user)
//   return this.http.post(environment.host+"/users", user,{'headers':headers})
// }




}
