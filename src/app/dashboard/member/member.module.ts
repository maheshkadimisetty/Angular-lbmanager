import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberRoutingModule } from './member-routing.module';
import { AllmembersComponent } from './allmembers/allmembers.component';
import { MemberComponent } from './member.component';
import { CreatememberComponent } from './createmember/createmember.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule
  ],
  declarations: [AllmembersComponent, MemberComponent, CreatememberComponent]
})
export class MemberModule { }
