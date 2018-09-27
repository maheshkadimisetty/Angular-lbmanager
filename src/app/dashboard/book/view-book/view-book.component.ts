import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  showMe = false;
  edit = true;
  bookId: any;
  book: any = [];
  constructor( private bookService: BookService, private toastr: ToastrService) { }
  viewbook(bookId): void {
    let obj = { bookId: bookId };
    this.bookService.fetchBook(obj).subscribe(response => {
      console.log(response);
      this.book = response;
      this.showMe = true;
      this.ngOnInit();
    });
  }
  delete(book): void {
    this.bookService.deletebook(book).subscribe(response => {
      console.log(response);
      this.toastr.success('Deleted Book Successfully!!');
    });
   }
   Update(book): void {
     this.bookService.updatebook(book).subscribe(response => {
       console.log(response);
       this.toastr.success('Updated successfully!!');
       this.viewbook(book.bookId);
       this.edit = true;
     });
   }
  ngOnInit() {
  }

}
