import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MemberService } from '../../member/service/member.service';
import { BookService } from '../service/book.service';
@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
  members: any = [];
  book: any = [];
  issuebook: any = [];
  memberId: any;
  bookId: any;
  public now: Date = new Date();
  constructor(private toastr: ToastrService, private memberService: MemberService, private bookService: BookService) {
   }
  fetchMember(memberId): void {
    let obj = { memberId: memberId };
    this.memberService.fetchMember(obj).subscribe(response => {
      console.log(response);
      this.members = response;
    });
  }
  fetchBook(bookId): void {
    let obj = { bookId: bookId };
    this.bookService.fetchBook(obj).subscribe(response => {
      console.log(response);
      this.book = response;
    });
  }

  issueBook(issuebook): void {
    const username = localStorage.getItem('username');
    let obj = { bookId: issuebook.bookId, memberId: issuebook.memberId, username: username };
    this.bookService.issueBook(obj).subscribe(response => {
      console.log(response);
      this.toastr.success('Book Issued Sucessfully!!');
    });
  }
  ngOnInit() {
  }

}
