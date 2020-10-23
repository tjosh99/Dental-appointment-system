import { Component, OnInit } from '@angular/core';
import { appointments } from '../../data-schema';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.scss']
})
export class ViewappointmentComponent implements OnInit {


  appointment = new appointments();
  //view-add
  app: object;
  count: object;

  app_id: number;
  appointment_id: string;
  app_date: string;
  app_time: string;
  patient_name: string;
  doctor_name: string;
  treatment_type: string;
  app_status: string;
  acontact: string;


  subscript: Subscription;

  constructor(public ds: DataService, private router: Router) { }

  ngOnInit() {
    this.getappointnment();
    this.countappointnment();



  }

  getappointnment() {
    this.subscript = this.ds.push_data('showappointment', this.appointment).subscribe((data: any) => {

      this.app = data.payload.data;

    });

  }

  countappointnment() {
    this.subscript = this.ds.push_data('appointmentcount', this.count).subscribe((data: any) => {

      this.count = data.payload.data;


    });

  }


  deleteappointment() {
    this.appointment.appointment_id = this.appointment_id;
    this.appointment.app_date = this.app_date;
    this.appointment.app_time = this.app_time;
    this.appointment.patient_name = this.patient_name;
    this.appointment.doctor_name = this.doctor_name;
    this.appointment.treatment_type = this.treatment_type;


    this.ds.push_data('deleteappointment', this.appointment).subscribe((data: any) => {
      this.app = data.payload.data;
      console.log(data);
      this.getappointnment();
    });

  }

  showedit(i: string | number) {
    this.appointment_id = this.app[i].appointment_id;
    this.app_date = this.app[i].app_date;
    this.app_time = this.app[i].app_time;
    this.patient_name = this.app[i].patient_name;
    this.doctor_name = this.app[i].doctor_name;
    this.treatment_type = this.app[i].treatment_type;
    this.app_status = this.app[i].app_status;
    this.acontact = this.app[i].acontact;
    console.log(this.app[i])

  }

  updateappointment() {

    this.appointment.appointment_id = this.appointment_id;
    this.appointment.app_date = this.app_date;
    this.appointment.app_time = this.app_time;
    this.appointment.patient_name = this.patient_name;
    this.appointment.doctor_name = this.doctor_name;
    this.appointment.treatment_type = this.treatment_type;
    this.appointment.app_status = this.app_status;
    this.appointment.acontact = this.acontact;
    console.log(this.appointment);

    this.ds.push_data('updateappointment', this.appointment).subscribe((data: any) => {
      this.app = data.payload.data;
      // console.log(data);
      this.getappointnment();

      this.appointment_id = '';
      this.app_date = '';
      this.app_time = '';
      this.patient_name = '';
      this.doctor_name = '';
      this.treatment_type = '';
      this.app_status = '';
      this.acontact = '';
    });
  }
}
