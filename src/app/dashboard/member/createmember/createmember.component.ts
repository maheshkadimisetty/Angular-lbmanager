import { Component, OnInit } from '@angular/core';
import {MemberService} from '../service/member.service';
import {Member} from './createmember'

@Component({
  selector: 'app-createmember',
  templateUrl: './createmember.component.html',
  styleUrls: ['./createmember.component.css']
})
export class CreatememberComponent implements OnInit {

  constructor( private memberService:MemberService) { }
  member = new Member('','','',new Date(),'','','','');
  //members : any = {};
  createMember() : void {
    alert("Created successfully!!");
    //console.log(this.members);
    this.memberService.createMember(this.member).subscribe((response) =>  {
      //alert("login successfully!!");
      console.log(response);
    });
  }
  ngOnInit() {
  }

}
