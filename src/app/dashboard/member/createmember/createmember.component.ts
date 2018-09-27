import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { Member } from './createmember';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createmember',
  templateUrl: './createmember.component.html',
  styleUrls: ['./createmember.component.css']
})
export class CreatememberComponent implements OnInit {
  constructor(private memberService: MemberService, private toastr: ToastrService) {}
  member = new Member('', '', '', new Date(), '', '', '', '');
  // members : any = {};
  createMember(): void {
    this.memberService.createMember(this.member).subscribe(response => {
      this.toastr.success('Created Member successfully!!');
      console.log(response);
    });
  }
  ngOnInit() {}
}
