import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
import {AllbooksComponent} from './allbooks/allbooks.component';
import { BookComponent } from './book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { IssuedBookLogComponent } from './issued-book-log/issued-book-log.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { ViewBookComponent } from './view-book/view-book.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule
  ],
  declarations: [AllbooksComponent, BookComponent, AddbookComponent, IssuedBookLogComponent, ReturnbookComponent, ViewBookComponent]
})
export class BookModule { }

