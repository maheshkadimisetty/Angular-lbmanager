import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
  closeResult: string;
  constructor(private userService: UserService, private modalService: NgbModal) {}

  public username: string;
  users: any = [];
  user: any;

  open(content, user) {
    this.user = user;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  updateUser(user): void {
    // console.log(user); updateUser
    this.userService.updateUser(user).subscribe(response => {
      alert('Updated successfully!!');
      console.log(response);
      this.ngOnInit();
    });
  }
  delete(user): void {
    // alert(book);
    // console.log(book);
    this.userService.deleteUser(user).subscribe(response => {
      alert('Deleted successfully!!');
      console.log(response);
      this.ngOnInit();
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
