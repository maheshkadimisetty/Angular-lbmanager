import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Routes, Router, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private router: Router) { }
  public username:string;
  ngOnInit() {
     this.username=localStorage.getItem('username');
    //alert(username);
    $(document).ready(function () {
      $('#pageSubmenu').toggle();
      $('#pageSubmenu1').toggle();
      $('#userSubmenu').toggle();
      $('#pageSubmenu2').toggle();
      //$('#usrmenu').toggle();
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
      $('#bookHomelink').on('click', function () {
        $('#pageSubmenu').toggle();
      });
      $('#memberHomelink').on('click', function () {
        $('#pageSubmenu1').toggle();
      });
      $('#userHomeLink').on('click', function () {
        $('#userSubmenu').toggle();
      });
      $('#AlluserHomelink').on('click', function () {
        $('#pageSubmenu2').toggle();
      });
      $('#usrmenu').on('click', function () {
        $('#usermenu').toggle();
      });
    });
  }
  public logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/sign-in']);
    //localStorage.clear();
  }
}
