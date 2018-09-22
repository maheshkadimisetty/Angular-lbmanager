import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
  bookIssueId: any;
  member: any = [];
  showMe = false;
  constructor(private bookService: BookService,
    private _route: ActivatedRoute) {
    this._route.queryParams.subscribe(params => {
      // console.log(params);
      if (params.bookIssueId) {
        this.fetchIssueBook(params.bookIssueId);
      }
  });
  }
  fetchIssueBook(bookIssueId): void {
    let obj = { bookIssueId: bookIssueId };
    this.bookService.fetchIssuedbook(obj).subscribe(response => {
      console.log(response);
      this.showMe = true;
      this.member = response;
    });
  }
  returnBook(bookIssueId): void {
    this.bookService.returnbook(bookIssueId).subscribe(response => {
      console.log(response);
      //  if (response.msg === 'successfully Collected Book' ) {
      // alert('helo');
      //  }
    });
  }
  ngOnInit() {
  }
}
