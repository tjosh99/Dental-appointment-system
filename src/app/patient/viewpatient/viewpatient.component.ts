import { Component, OnInit } from '@angular/core';
import { patients } from '../../data-schema';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.scss']
})
export class ViewpatientComponent implements OnInit {

  patient = new patients();
  pat:object;

  patient_id:string;
  ptreatment_type:string;
  pfname:string;
  pmname:string;
  plname:string;
  pst_add:string;
  pcity_add:string;
  pprovi_add:string;
  pcontact:string;
  page:string;
  psex:string;
  pbloodtype:string;
  pbdate:string;

  subscript: Subscription;

  constructor(public ds: DataService, private router: Router) { }

  ngOnInit() {
    this.getpatient();

  }
    
    getpatient(){
      this.subscript = this.ds.push_data('showpatient', this.patient).subscribe((data: any)=>{
      
      this.pat = data.payload.data;


    });

  }


  deletepatient() {
    this.patient.patient_id = this.patient_id;
    // this.patient.pat_date = this.pat[i].pat_date;
    // this.patient.pat_time = this.pat[i].pat_time;
    // this.patient.patient_name = this.pat[i].patient_name;
    // this.patient.patient_name = this.pat[i].patient_name;
    // this.patient.treatment_type = this.pat[i].treatment_type;
  
    // console.log(this.patient);
    this.ds.push_data('deletepatient', this.patient).subscribe((data: any)=>{
    this.pat = data.payload.data;
    console.log(data);
    this.getpatient();
    });

  }
  

showpatient(i: string | number){
  this.patient_id = this.pat[i].patient_id;
  this.ptreatment_type = this.pat[i].ptreatment_type;
  this.pfname = this.pat[i].pfname;
  this.pmname = this.pat[i].pmname;
  this.plname = this.pat[i].plname;
  this.pst_add = this.pat[i].pst_add;
  this.pcity_add = this.pat[i].pcity_add;
  this.pprovi_add = this.pat[i].pprovi_add;
  this.pcontact = this.pat[i].pcontact;
  this.page = this.pat[i].page;
  this.psex = this.pat[i].psex;
  this.pbloodtype = this.pat[i].pbloodtype;
  this.pbdate = this.pat[i].pbdate;
  console.log(this.pat[i])
 
 }
 
 updatepatient(){
 
  this.patient.patient_id = this.patient_id;
  this.patient.ptreatment_type = this.ptreatment_type;
  this.patient.pfname = this.pfname;
  this.patient.pmname = this.pmname;
  this.patient.plname = this.plname;
  this.patient.pcontact = this.pcontact;
  this.patient.pst_add = this.pst_add;
  this.patient.pcity_add = this.pcity_add;
  this.patient.pprovi_add = this.pprovi_add;
  this.patient.page = this.page;
  this.patient.psex = this.psex;
  this.patient.pbloodtype = this.pbloodtype;
  this.patient.pbdate = this.pbdate;
  console.log(this.patient);
  
  this.ds.push_data('updatepatient', this.patient).subscribe((data: any)=>{
  this.pat = data.payload.data;
  // console.log(data);
  this.getpatient();
 
      this.patient_id = '';
      this.ptreatment_type = '';
      this.pfname = '';
      this.pmname = '';
      this.plname = '';
      this.pcontact = '';
      this.pst_add = '';
      this.pcity_add = '';
      this.pprovi_add = '';
      this.page = '';
      this.psex = '';
      this.pbloodtype = '';
      this.pbdate = '';
  });

  }

}