import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllmembersComponent} from './allmembers/allmembers.component';
import {CreatememberComponent} from './createmember/createmember.component'

const routes: Routes = [
  { path: '', redirectTo: '/allMembers', pathMatch: 'full' },
  {
    path: 'allMembers',
    component: AllmembersComponent,
  },
  {
    path: 'createMember',
    component: CreatememberComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
