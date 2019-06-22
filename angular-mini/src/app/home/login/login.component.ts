import { Component, OnInit } from '@angular/core';
import { User } from '../../core/user/user.model';
import {  NgForm } from '@angular/forms';
import {  UserService } from '../../core/user/user.service';
import { ToastrService } from 'ngx-toastr';
import {HttpService} from '../../core/Service/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$';
  // isLoginError:  boolean =  false;
  constructor(private userService: UserService, private toast: ToastrService, private http: HttpService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      name: '',
      password: '',
      email: '',
      lastName: ''
    };
  }

  OnSubmit(form: NgForm) {
    console.log(form.value)
    form.value['GenderId'] = '';
    this.http.post('Account/Register', form.value).subscribe(data => {
      alert('Успешная регистрация');
  });
    }
}
