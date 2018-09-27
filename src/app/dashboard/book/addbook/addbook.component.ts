import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from './createbook';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  constructor(private bookService: BookService, private toastr: ToastrService) {}
  book = new Book('', '', '', 0);
  createBook(): void {
    this.bookService.addbook(this.book).subscribe(response => {
      // alert("login successfully!!");
      this.toastr.success('Book Added Successfully');
      console.log(response);
      this.book = new Book('', '', '', 0);
    });
  }

  ngOnInit() {}
}
