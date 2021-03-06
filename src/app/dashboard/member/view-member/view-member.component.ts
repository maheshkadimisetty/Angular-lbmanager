import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../service/member.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {
  public memberId: any;
  closeResult: string;
  members: any = [];
  fechMemIssueBooks: any = [];
  showMe = false;
  edit = true;
  errormsg = false;
  payingfine: number;
  constructor(
    private router: Router,
    private memberService: MemberService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}
  viewmember(memberId): void {
    let obj = { memberId: memberId };
    this.memberService.fetchMember(obj).subscribe(response => {
      console.log(response);
      this.errormsg = false;
      this.members = response;
      this.showMe = true;
      this.ngOnInit();
    },
    error => {
      if (error.status === 400) {
        this.errormsg = true;
      }
    });
  }
  open(content, members) {
    this.members = members;
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
  payFine(memberId, payingfine): void {
    let obj = { memberId: memberId, fine: payingfine };
    console.log(obj);
    this.memberService.payFine(obj).subscribe(response => {
      this.toastr.success('Fine' + ' ' + obj.fine + ' ' + 'Paid Sucessfully!!');
      console.log(response);
      this.viewmember(memberId);
    },
    error => {
      if (error.status === 400) {
        this.toastr.warning('error in paying fine!!');
      }
    });
  }
  delete(members): void {
    this.memberService.deleteMember(members).subscribe(response => {
      console.log(response);
      this.toastr.success('Deleted Member successfully!!');
    },
    error => {
      if (error.status === 400) {
        this.toastr.warning('Please Collect Fine & Books before deleting!!');
      }
    });
  }
  Update(members): void {
    this.memberService.updateMember(members).subscribe(response => {
      console.log(response);
      this.toastr.success('Updated Member successfully!!');
      this.viewmember(members.memberId);
      this.edit = true;
    },
    error => {
      if (error.status === 400) {
        this.toastr.warning('error in updating member!!');
      }
    });
  }
  returnBook(bookIssueId): void {
    this.router.navigate(['dashboard/dashboard/book/returnBook'], {
      queryParams: { bookIssueId: bookIssueId }
    });
  }
  ngOnInit() {
    this.memberService.fetchIssuedBooks(this.memberId).subscribe(
      response => {
        console.log(response);
        this.fechMemIssueBooks = response;
      },
      error => {
        if (error.status === 400) {
          this.toastr.warning('error in fetching books!!');
        }
      }
    );
  }
}
