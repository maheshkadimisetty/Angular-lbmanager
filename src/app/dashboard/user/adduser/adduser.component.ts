import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from './user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userService:UserService) { }

  user = new User('','','','','');
  //members : any = {};
  createUser() : void {
    alert("login successfully!!");
    //console.log(this.members);
    this.userService.createUser(this.user).subscribe((response) =>  {
      //alert("login successfully!!");
      console.log(response);
    });
  }
  ngOnInit() {
  }

}

