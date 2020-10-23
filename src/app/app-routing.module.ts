import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './doctor/viewdoctor/viewdoctor.component';
import { AddpatientComponent } from './patient/addpatient/addpatient.component';
import { ViewpatientComponent } from './patient/viewpatient/viewpatient.component';
import { AddpaymentComponent } from './payment/addpayment/addpayment.component';
import { ViewpaymentComponent } from './payment/viewpayment/viewpayment.component';
import { AddappointmentComponent } from './appointment/addappointment/addappointment.component';
import { ViewappointmentComponent } from './appointment/viewappointment/viewappointment.component';
import { AddreportComponent } from './report/addreport/addreport.component';
import { ViewreportComponent } from './report/viewreport/viewreport.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adddoctor', component: AdddoctorComponent },
  { path: 'viewdoctor', component: ViewdoctorComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'viewpatient', component: ViewpatientComponent },
  { path: 'addpayment', component: AddpaymentComponent },
  { path: 'viewpayment', component: ViewpaymentComponent },
  { path: 'addappointment', component: AddappointmentComponent },
  { path: 'viewappointment', component: ViewappointmentComponent },
  { path: 'addreport', component: AddreportComponent },
  { path: 'viewreport', component: ViewreportComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
