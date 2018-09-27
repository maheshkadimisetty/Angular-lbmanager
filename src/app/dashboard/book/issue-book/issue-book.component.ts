import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  constructor(private toastr: ToastrService) {
    this.toastr.success('Hello world!', 'Toastr fun!');
   }

  ngOnInit() {
  }

}
