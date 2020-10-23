import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserService } from './services/user.service';
import { DataService } from './services/data.service';

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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    AdddoctorComponent,
    ViewdoctorComponent,
    AddpatientComponent,
    ViewpatientComponent,
    AddpaymentComponent,
    ViewpaymentComponent,
    AddappointmentComponent,
    ViewappointmentComponent,
    AddreportComponent,
    ViewreportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [
    UserService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
