import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  constructor(private bookService: BookService, private modalService: NgbModal, private toastr: ToastrService) {}
  closeResult: string;
  public username: string;
  data: any = [];
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
    this.bookService.deletebook(book).subscribe(response => {
      this.toastr.success('Book Deleted Sucessfully');
      console.log(response);
      this.ngOnInit();
    });
  }
  updateBook(book): void {
    this.bookService.updatebook(book).subscribe(response => {
      this.toastr.success('Updated Sucessfully');
      console.log(response);
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.bookService.allbooks().subscribe(response => {
      console.log(response);
      this.data = response;
      console.log(this.data);
    });
  }
}
