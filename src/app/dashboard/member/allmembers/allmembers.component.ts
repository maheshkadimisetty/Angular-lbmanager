import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { FilterPipe } from '../../filter.pipe';
@Component({
  selector: 'app-allmembers',
  templateUrl: './allmembers.component.html',
  styleUrls: ['./allmembers.component.css']
})
export class AllmembersComponent implements OnInit {
  constructor(private memberService: MemberService) {}

  searchText: string;
  public username: string;
  members: any = [];
  // member: any;

  delete(member): void {
     alert(member);
    console.log(member);
    this.memberService.deleteMember(member).subscribe(response => {
      //   // alert("login successfully!!");
      console.log(response);
      alert('Deleted successfully!!');
      this.ngOnInit();
    });
  }
  editMember() {}
  ngOnInit() {
    this.memberService.allMembers().subscribe(response => {
      console.log(response);
      this.members = response;
      console.log(this.members);
    });
  }
}
