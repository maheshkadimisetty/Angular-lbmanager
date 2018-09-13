import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberRoutingModule } from './member-routing.module';
import { AllmembersComponent } from './allmembers/allmembers.component';
import { MemberComponent } from './member.component';
import { CreatememberComponent } from './createmember/createmember.component';
import { ViewMemberComponent } from './view-member/view-member.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule
  ],
  declarations: [AllmembersComponent, MemberComponent, CreatememberComponent, ViewMemberComponent]
})
export class MemberModule { }
