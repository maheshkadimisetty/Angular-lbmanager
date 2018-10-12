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
  mshow = true;
  bshow = true;

  public now: Date = new Date();
  constructor(
    private toastr: ToastrService,
    private memberService: MemberService,
    private bookService: BookService
  ) {}
  issueDate: any;
  returnDate: any;
  rDate: any;
  fetchMember(memberId): void {
    let obj = { memberId: memberId };
    this.memberService.fetchMember(obj).subscribe(
      response => {
        console.log(response);
        this.mshow = true;
        this.members = response;
      },
      error => {
        if (error.status === 400) {
          this.mshow = false;
        } else {
          this.toastr.warning('Internal server Error');
        }
      }
    );
  }
  fetchBook(bookId): void {
    let obj = { bookId: bookId };
    this.bookService.fetchBook(obj).subscribe(response => {
      console.log(response);
      this.bshow = true;
      this.book = response;
    },
    error => {
      if (error.status === 400) {
        this.bshow = false;
      } else {
        this.toastr.warning('Internal server Error');
      }
    });
  }

  issueBook(issuebook): void {
    const username = localStorage.getItem('username');
    let obj = { bookId: issuebook.bookId, memberId: issuebook.memberId, username: username };
    this.bookService.issueBook(obj).subscribe(response => {
      console.log(response);
      this.toastr.success('Book Issued Sucessfully!!');
    },
      error => {
        if (error.status === 400) {
          this.toastr.warning('Exceed Book Limit');
        } else {
          this.toastr.warning('Internal server Error');
        }
      });
  }
  ngOnInit() {
    this.issueDate = new Date().toISOString().split('T')[0];
    this.returnDate = new Date();
    this.returnDate.setDate(this.returnDate.getDate() + 15);
    console.log(this.returnDate.toISOString().split('T')[0]);
    this.rDate = this.returnDate.toISOString().split('T')[0];
  }
}
