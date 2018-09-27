import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../service/user.service';
import { FilterdataPipe } from '../../filter.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
  closeResult: string;
  constructor(private userService: UserService, private modalService: NgbModal, private toastr: ToastrService) {}

  public username: string;
  public searchText: string;
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
    this.userService.updateUser(user).subscribe(response => {
      this.toastr.success('User Updated successfully!!');
      console.log(response);
      this.ngOnInit();
    });
  }
  delete(user): void {
    this.userService.deleteUser(user).subscribe(response => {
      this.toastr.success('User Deleted successfully!!');
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
