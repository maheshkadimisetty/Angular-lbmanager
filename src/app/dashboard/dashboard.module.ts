import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, NgHttpLoaderModule],
  declarations: [DashboardComponent, HomeComponent, AboutComponent]
})
export class DashboardModule {}
