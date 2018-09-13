import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { AlluserComponent } from './alluser/alluser.component';
import {UserComponent} from './user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FilterdataPipe } from '.././filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [AlluserComponent , UserComponent, AdduserComponent, FilterdataPipe]
})
export class UserModule { }
