import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllmembersComponent} from './allmembers/allmembers.component';
import {CreatememberComponent} from './createmember/createmember.component';
import { ViewMemberComponent } from './view-member/view-member.component';

const routes: Routes = [
  { path: '', redirectTo: '/allMembers', pathMatch: 'full' },
  {
    path: 'allMembers',
    component: AllmembersComponent,
  },
  {
    path: 'createMember',
    component: CreatememberComponent,
  },
  {
    path: 'viewMember',
    component: ViewMemberComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
