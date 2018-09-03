import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
  constructor(private userService: UserService) {}

  public username: string;
  users: any = [];
  user: any;

  editUser(): void {

  }
  delete(user): void {
    // alert(book);
    // console.log(book);
    this.userService.deleteUser(user).subscribe(response => {
      alert('Deleted successfully!!');
      console.log(response);
      ngOnInit();
    });
  }
  ngOnInit() {
    this.userService.allUsers().subscribe(response => {
      console.log(response);
      this.users = response;
      console.log(this.users);
    });
  }
}
