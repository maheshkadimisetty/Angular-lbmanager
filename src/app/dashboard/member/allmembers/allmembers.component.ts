import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-allmembers',
  templateUrl: './allmembers.component.html',
  styleUrls: ['./allmembers.component.css']
})
export class AllmembersComponent implements OnInit {
  constructor(private memberService: MemberService, private modalService: NgbModal, private toastr: ToastrService) {}
  closeResult: string;
  searchText: string;
  public username: string;
  data: any = [];
  member: any;
  open(content, member) {
    this.member = member;
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

  delete(member): void {
     alert(member);
    console.log(member);
    this.memberService.deleteMember(member).subscribe(response => {
      console.log(response);
      this.toastr.success('Deleted Member successfully!!');
      this.ngOnInit();
    });
  }
  updateMember(member): void {
    this.memberService.updateMember(member).subscribe(response => {
      console.log(response);
      this.toastr.success('Updated Member successfully!!');
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.memberService.allMembers().subscribe(response => {
      console.log(response);
      this.data = response;
      console.log(this.data);
    });
  }
}
