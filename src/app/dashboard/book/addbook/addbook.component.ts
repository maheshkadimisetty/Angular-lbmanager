import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Book} from './createbook'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor( private bookService:BookService) { }
  book = new Book('','','','');
  //members : any = {};
  createBook(inputForm) : void {
    alert("Added successfully!!");
    //console.log(this.members);
    this.bookService.addbook(this.book).subscribe((response) =>  {
      //alert("login successfully!!");
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
