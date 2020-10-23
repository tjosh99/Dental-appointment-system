import { Component, OnInit } from '@angular/core';
import { doctors } from '../../data-schema';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.scss']
})
export class ViewdoctorComponent implements OnInit {

    doctor = new doctors ();
    doc:object;
    count:object;

    doctor_id:string;
    dfname:string;
    dmname:string;
    dlname:string;
    dcontact:string;
    dst_add:string;
    dcity_add:string;
    dprovi_add:string;
    dage:string;
    dsex:string;
    dbloodtype:string;
    dbdate:string;

    subscript: Subscription;

  constructor(public ds: DataService,private router: Router) { }

  ngOnInit() {
    this.getdoctor();
    this.countappointnment();
  }
  
  getdoctor(){

    this.subscript = this.ds.push_data('showdoctor', this.doctor).subscribe((data: any)=>{
      
      this.doc = data.payload.data;

  });
}

countappointnment(){
  this.subscript = this.ds.push_data('doctorcount', this.count).subscribe((data: any)=>{
  
  this.count = data.payload.data;
  

});

}

deletedoctor(i) {
  this.doctor.doctor_id = this.doc[i].doctor_id;
  // this.doctor.doc_date = this.doc[i].doc_date;
  // this.doctor.doc_time = this.doc[i].doc_time;
  // this.doctor.patient_name = this.doc[i].patient_name;
  // this.doctor.doctor_name = this.doc[i].doctor_name;
  // this.doctor.treatment_type = this.doc[i].treatment_type;

  // console.log(this.doctor);
  this.ds.push_data('deletedoctor', this.doctor).subscribe((data: any)=>{
  this.doc = data.payload;
  console.log(data);
  this.getdoctor();
  });

}

showdoctor(i: string | number){
 this.doctor_id = this.doc[i].doctor_id;
 this.dfname = this.doc[i].dfname;
 this.dmname = this.doc[i].dmname;
 this.dlname = this.doc[i].dlname;
 this.dst_add = this.doc[i].dst_add;
 this.dcity_add = this.doc[i].dcity_add;
 this.dprovi_add = this.doc[i].dprovi_add;
 this.dcontact = this.doc[i].dcontact;
 this.dage = this.doc[i].dage;
 this.dsex = this.doc[i].dsex;
 this.dbloodtype = this.doc[i].dbloodtype;
 this.dbdate = this.doc[i].dbdate;
 console.log(this.doc[i])

}

updatedoctor(){

  this.doctor.doctor_id = this.doctor_id;
  this.doctor.dfname = this.dfname;
  this.doctor.dmname = this.dmname;
  this.doctor.dlname = this.dlname;
  this.doctor.dst_add = this.dst_add;
  this.doctor.dcity_add = this.dcity_add;
  this.doctor.dprovi_add = this.dprovi_add;
  this.doctor.dcontact = this.dcontact;
  this.doctor.dage = this.dage;
  this.doctor.dsex = this.dsex;
  this.doctor.dbloodtype = this.dbloodtype;
  this.doctor.dbdate = this.dbdate;
 console.log(this.doctor);
 
 this.ds.push_data('updatedoctor', this.doctor).subscribe((data: any)=>{
 this.doc = data.payload;
 // console.log(data);
 this.getdoctor();

 this.doctor_id = '';
 this.dfname = '';
 this.dmname = '';
 this.dlname = '';
 this.dst_add = '';
 this.dcity_add = '';
 this.dprovi_add = '';
 this.dcontact = '';
 this.dage = '';
 this.dsex = '';
 this.dbloodtype = '';
 this.dbdate = '';
 });
}
}
