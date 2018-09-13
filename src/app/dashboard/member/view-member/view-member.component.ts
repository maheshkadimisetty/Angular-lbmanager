import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {
  public memberId: number;
  members: any = [];
  constructor(private memberService: MemberService) {}
  viewmember(memberId): void {
    let obj = {
      memberId: memberId
    };
    // alert(this.memberID);
    this.memberService.fetchMember(obj).subscribe(response => {
      console.log(response);
      this.members = response;
    });
  }
  ngOnInit() {}
}
