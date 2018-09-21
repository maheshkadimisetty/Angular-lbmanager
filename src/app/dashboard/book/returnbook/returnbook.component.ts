import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
  bookIssueId: any;
  member: any = [];
  showMe = false;
  constructor(private bookService: BookService) {}
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
    this.fetchIssueBook(this.bookIssueId);
  }
}
