import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
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
      lastName: user.lastName
    };
    return this.http.post( this.rootUrl +  '/api/Account/Register',  body);
  }
  }

