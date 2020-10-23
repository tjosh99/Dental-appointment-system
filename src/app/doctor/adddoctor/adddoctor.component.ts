import { Component, OnInit } from '@angular/core';
import { doctors } from '../../data-schema';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.scss']
})
export class AdddoctorComponent implements OnInit {

  doctor = new doctors ();
  doc_id:number;
  doc:object;
  getDoc:object;

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
    

  constructor(public ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  
  adddoctor() {
    this.doctor.dfname = this.dfname;
    this.doctor.dmname = this.dmname;
    this.doctor.dlname = this.dlname;
    this.doctor.dcontact = this.dcontact;
    this.doctor.dst_add = this.dst_add;
    this.doctor.dcity_add = this.dcity_add;
    this.doctor.dprovi_add = this.dprovi_add;
    this.doctor.dage = this.dage;
    this.doctor.dsex = this.dsex;
    this.doctor.dbloodtype = this.dbloodtype;
    this.doctor.dbdate = this.dbdate;

    // console.log(this.doctor);
    this.ds.push_data('adddoctor', this.doctor).subscribe((data: any)=>{
  
      this.doc = data.payload;
      console.log(data);

      this.dfname = '';
      this.dmname = '';
      this.dlname = '';
      this.dcontact = '';
      this.dst_add = '';
      this.dcity_add = '';
      this.dprovi_add = '';
      this.dage = '';
      this.dsex = '';
      this.dbloodtype = '';
      this.dbdate = '';

    });

  }

  public searchdoctor(){
    this.getDoc = {

      "doctor_id": this.doc_id


    };
    this.ds.push_data("searchdoctor", this.getDoc).subscribe((data: any)=>{ 
    this.getDoc = data.payload.data;
    console.log(data);

      this.doctor_id = this.getDoc[0]['doctor_id'];
      this.dfname = this.getDoc[0]['dfname'];
      this.dmname = this.getDoc[0]['dmname'];
      this.dlname = this.getDoc[0]['dlname'];
      this.dcontact = this.getDoc[0]['dcontact'];
      this.dst_add = this.getDoc[0]['dst_add'];
      this.dcity_add = this.getDoc[0]['dcity_add'];
      this.dprovi_add = this.getDoc[0]['dprovi_add'];
      this.dage = this.getDoc[0]['dage'];
      this.dsex = this.getDoc[0]['dsex'];
      this.dbloodtype = this.getDoc[0]['dbloodtype'];
      this.dbdate = this.getDoc[0]['dbdate'];
    });
  }
}
