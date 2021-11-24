import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { JobDescriptionComponent } from './component/job-description/job-description.component';


const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
{
  path: "signup",
    component: SignupComponent,
},
{
  path: "jobDescription",
    component: JobDescriptionComponent,
}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
