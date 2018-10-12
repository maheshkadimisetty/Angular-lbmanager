import { Component, OnInit } from '@angular/core';
import { SignInService } from './signin.service';
import { Router } from '@angular/router';
import { User } from './user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private signInservice: SignInService, private router: Router,
    private toastr: ToastrService) { }
  public user: any[];
  model = new User('', '');
  isLogin = false;
  ngOnInit() {}

  login(): void {
    this.signInservice.loginUser(this.model).subscribe(response => {
      // alert("login successfully!!");
      console.log(response);
      this.toastr.success('Login Success');
      localStorage.setItem('access-token', response['token']);
      localStorage.setItem('username', response['user']['username']);
      localStorage.setItem('email', response['user']['email']);
      localStorage.setItem('role', response['user']['role']);
      console.log(localStorage.getItem('email'));
      // console.log("form data",inputForm);
      // alert("login successfully!!")
      this.router.navigate(['/dashboard/dashboard']);
    }
      , error => {
        if (error.status === 401) {
          this.toastr.warning('Invalid Username and Password');
        } else if (error.status === 500 ) {
          this.toastr.warning(' Username and Password is Required');
        } else {
          this.toastr.warning('Internal server Error');
        }
    });
  }
  forgot(): void {
    this.isLogin = true;
    // alert('clicked')
  }
  reset(): void {
    this.toastr.success('Email Sended');
    this.isLogin = false;
  }
}
