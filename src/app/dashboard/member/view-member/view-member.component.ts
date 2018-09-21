import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../service/member.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  payingfine: number;
  constructor(private router: Router, private memberService: MemberService, private modalService: NgbModal) {}
  viewmember(memberId): void {
    let obj = { memberId: memberId };
    this.memberService.fetchMember(obj).subscribe(response => {
      console.log(response);
      this.members = response;
      this.showMe = true;
     // alert(this.members.memberId);
      this.ngOnInit();
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
      console.log(response);
      this.viewmember(memberId);
    });
  }
  delete(members): void {
   this.memberService.deleteMember(members).subscribe(response => {
     console.log(response);
     alert('Deleted successfully!!');
   });
  }
  Update(members): void {
    this.memberService.updateMember(members).subscribe(response => {
      console.log(response);
      alert('Updated successfully!!');
      this.viewmember(members.memberId);
      this.edit = true;
    });
  }
  returnBook(bookIssueId): void {
    this.router.navigate(['dashboard/dashboard/book/returnBook']);
  }
  ngOnInit() {
    this.memberService.fetchIssuedBooks(this.memberId).subscribe(response => {
      console.log(response);
      this.fechMemIssueBooks = response;
    });
  }
}
