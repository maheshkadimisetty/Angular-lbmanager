import { Component, OnInit } from '@angular/core';
import {MemberService} from '../service/member.service';
@Component({
  selector: 'app-allmembers',
  templateUrl: './allmembers.component.html',
  styleUrls: ['./allmembers.component.css']
})
export class AllmembersComponent implements OnInit {

  constructor(private memberService:MemberService) { }
   
 
  public username:string;
  members: any=[];
  member:any;

  ngOnInit() {
    this.memberService.allMembers().subscribe((response) =>  {
      console.log(response);
      this.members=response;
      console.log(this.members);
        
    });

  }

}