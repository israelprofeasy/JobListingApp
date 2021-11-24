import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { JobDescriptionComponent } from './component/job-description/job-description.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminJoblistComponent } from './component/admin-joblist/admin-joblist.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    JobDescriptionComponent,
    AdminDashboardComponent,
    AdminJoblistComponent,
    UserDashboardComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
