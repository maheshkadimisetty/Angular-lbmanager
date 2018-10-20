import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberRoutingModule } from './member-routing.module';
import { AllmembersComponent } from './allmembers/allmembers.component';
import { MemberComponent } from './member.component';
import { CreatememberComponent } from './createmember/createmember.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { DataTableModule } from 'angular-6-datatable';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule, DataTableModule, NgHttpLoaderModule
  ],
  declarations: [AllmembersComponent, MemberComponent, CreatememberComponent, ViewMemberComponent]
})
export class MemberModule { }
