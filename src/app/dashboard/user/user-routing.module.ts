/**
 * Created by Mahesh on 17-08-2018.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlluserComponent} from './alluser/alluser.component';
import {AdduserComponent} from './adduser/adduser.component'

const routes: Routes = [
  { path: '', redirectTo: '/allUsers', pathMatch: 'full' },
  {
    path: 'allUsers',
    component: AlluserComponent,
  },
  {
    path: 'addUser',
    component: AdduserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
