import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import {  User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl =  'http://localhost:28526/';
  constructor(private http:  HttpClient)  { }

  registerUser (user:  User) {
    const body:  User = {
      name: user.name,
      password: user.password,
      email: user.email,
      lastName: user.lastName,
    };
    return this.http.post( this.rootUrl +  '/api/Account/Register',  body);
  }
   userAuthentication(name, password) {
     const data =  'name= ' + name +  'password= ' +  password +  '&grant_type=password';
     const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post( this.rootUrl +  '/token',  data,  {  headers:  reqHeader } );
  }
  }
//   getUserClaims(){
//   return  this.http.get(this.rootUrl + '/api/GetUserClaims');
// }
