import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from './user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor(private userService: UserService, private toastr: ToastrService) {}

  user = new User('', '', '', '', '');
  // members : any = {};
  createUser(): void {
    this.userService.createUser(this.user).subscribe(response => {
      this.toastr.success('User Created successfully!!');
      console.log(response);
      this.user = new User('', '', '', '', '');
    });
  }
  ngOnInit() {}
}
