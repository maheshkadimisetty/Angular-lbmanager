/**
 * Created by Mahesh on 15-08-2018.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllbooksComponent} from './allbooks/allbooks.component';
import {AddbookComponent} from './addbook/addbook.component'

const routes: Routes = [
  { path: '', redirectTo: '/allBooks', pathMatch: 'full' },
  {
    path: 'allBooks',
    component: AllbooksComponent,
  },
  {
    path: 'addBook',
    component: AddbookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
