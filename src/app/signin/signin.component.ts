import { Component, OnInit } from '@angular/core';
import {SignInService} from './signin.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private signInservice:SignInService,private router: Router) { }
  model = new User('','');
  isLogin = false;
  ngOnInit() {
  }
  public user:any[];

  login() : void {
    this.signInservice.loginUser(this.model).subscribe((response) =>  {
      //alert("login successfully!!");
      console.log(response);
      localStorage.setItem('access-token', response['token']);
      localStorage.setItem('username', response['user']['username']);
      localStorage.setItem('email', response['user']['email']);
      localStorage.setItem('role', response['user']['role']);
      console.log(localStorage.getItem('email'));
      if(localStorage.getItem('username') == 'admin' && localStorage.getItem('role') == 'admin'){
        // console.log("form data",inputForm);
        //alert("login successfully!!")
        this.router.navigate(['/dashboard/dashboard']);
      }else {
        //this.router.navigate(['/sign-in']);
       // alert("Invalid credentials");
      }
    });

  }
  forgot() : void{
    this.isLogin = true;
    //alert('clicked')
  }
}
