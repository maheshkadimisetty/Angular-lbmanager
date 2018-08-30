import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {FilterPipe} from '../../filter.pipe'

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  constructor(private bookService:BookService) { }


  public username:string;
  books: any=[];
  book:any;

  ngOnInit() {
    this.bookService.allbooks().subscribe((response) =>  {
      console.log(response);
      this.books=response;
      console.log(this.books);

    });

  }

}
