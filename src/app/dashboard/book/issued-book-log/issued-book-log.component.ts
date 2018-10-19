import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-issued-book-log',
  templateUrl: './issued-book-log.component.html',
  styleUrls: ['./issued-book-log.component.css']
})
export class IssuedBookLogComponent implements OnInit {
  constructor(private bookService: BookService) {}
  data: any = [];
  ngOnInit() {
    this.bookService.issuedbooks().subscribe(response => {
      console.log(response);
      this.data = response;
      console.log(this.data);
    });
  }
}
