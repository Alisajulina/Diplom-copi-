import { Component, OnInit } from '@angular/core';
import { User } from '../../core/user/user.model';
import {  NgForm } from '@angular/forms';
import {  UserService } from '../../core/user/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$';
  // isLoginError:  boolean =  false;
  constructor(private userService: UserService, private toast: ToastrService) { }

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
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        // tslint:disable-next-line:triple-equals
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toast.success('User registration successful');
        } else {
          this.toast.error(data.Errors[0]);
        }
      });
    }
}
