/**
 * Created by venkatesh on 7/15/2018.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component'
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{ path: '', redirectTo: 'home', pathMatch: 'full' },
      {  path: 'home',
        component:HomeComponent
      },
      {
        path: 'member',
        loadChildren: './member/member.module#MemberModule'
      },
      {
        path: 'book',
        loadChildren: './book/book.module#BookModule'
      },
      {
        path: 'about',
        component:AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

