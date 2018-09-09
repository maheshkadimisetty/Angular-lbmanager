import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignInService } from './signin/signin.service';
import { FilterPipe } from './dashboard/filter.pipe';
import { JwtModule } from '@auth0/angular-jwt';
import { RoleGuardService } from './auth/role-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function tokenGetter() {
  return localStorage.getItem('access-token');
}
@NgModule({
  declarations: [AppComponent, SigninComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
