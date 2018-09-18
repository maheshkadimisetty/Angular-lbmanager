import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {
  public memberId: any;
  members: any = [];
  fechMemIssueBooks: any = [];
  showMe = false;
  constructor(private memberService: MemberService) {}
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
  ngOnInit() {
    this.memberService.fetchIssuedBooks(this.memberId).subscribe(response => {
      console.log(response);
      this.fechMemIssueBooks = response;
    });
  }
}
