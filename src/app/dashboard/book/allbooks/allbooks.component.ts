import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  constructor(private bookService: BookService, private modalService: NgbModal) {}
  closeResult: string;
  public username: string;
  books: any = [];
  book: any;

  open(content, book) {
    this.book = book;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  delete(book): void {
    // alert(book);
    // console.log(book);
    this.bookService.deletebook(book).subscribe(response => {
      alert('Deleted successfully!!');
      console.log(response);
      this.ngOnInit();
    });
  }
  updateBook(book): void {
    this.bookService.updatebook(book).subscribe(response => {
      alert('Updated successfully!!');
      console.log(response);
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.bookService.allbooks().subscribe(response => {
      console.log(response);
      this.books = response;
      console.log(this.books);
    });
  }
}
