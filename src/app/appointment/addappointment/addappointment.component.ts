import { Component, OnInit } from '@angular/core';
import { appointments } from '../../data-schema';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.scss']
})
export class AddappointmentComponent implements OnInit {

  appointment = new appointments();
  app_id: number;
  app: object;
  getApp: object;

  appointment_id: string;
  app_date: string;
  app_time: string;
  patient_name: string;
  doctor_name: string;
  treatment_type: string;
  acontact: string;
  app_status: string;

  constructor(public ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addappointment() {

    this.appointment.appointment_id = this.appointment_id;
    this.appointment.app_date = this.app_date;
    this.appointment.app_time = this.app_time;
    this.appointment.patient_name = this.patient_name;
    this.appointment.doctor_name = this.doctor_name;
    this.appointment.treatment_type = this.treatment_type;
    this.appointment.acontact = this.acontact;
    this.appointment.app_status = this.app_status;

    this.ds.push_data('addappointment', this.appointment).subscribe((data: any) => {

      this.app = data.payload;
      console.log(data);

      this.appointment_id = '';
      this.app_date = '';
      this.app_time = '';
      this.patient_name = '';
      this.doctor_name = '';
      this.treatment_type = '';
      this.acontact = '';
      this.app_status = '';


    });

  }


  //     selectdoctor(){
  //     this.ds.push_data('selectdoctor', this.appointment).subscribe((data: any)=>{

  //       this.app = data.payload.data;

  //     });

  // }

  retrievedappointment() {

    this.appointment.appointment_id = this.appointment_id;

    this.ds.push_data('retrievedappointment', this.appointment).subscribe((data: any) => {

      this.app = data.payload;
      console.log(data);



    });

  }

  public searchappointment() {
    this.getApp = {

      "appointment_id": this.app_id


    };
    this.ds.push_data("searchappointment", this.getApp).subscribe((data: any) => {
      this.getApp = data.payload.data;
      console.log(data);

      this.appointment_id = this.getApp[0]['appointment_id'];
      this.app_date = this.getApp[0]['app_date'];
      this.app_time = this.getApp[0]['app_time'];
      this.patient_name = this.getApp[0]['patient_name'];
      this.doctor_name = this.getApp[0]['doctor_name'];
      this.treatment_type = this.getApp[0]['treatment_type'];

    });
  }

  change() {

  }
}