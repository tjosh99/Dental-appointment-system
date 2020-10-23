import { Component, OnInit } from '@angular/core';
import { patients } from '../../data-schema';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {

  patient = new patients();
  pat_id:number;
  pat:object;
  getPat:object;

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

  constructor(public ds: DataService, private router: Router ) { }

  ngOnInit(): void {
  }

  addpatient() {
    this.patient.patient_id = this.patient_id;
    this.patient.pfname = this.pfname;
    this.patient.pmname = this.pmname;
    this.patient.plname = this.plname;
    this.patient.pcontact = this.pcontact;
    this.patient.pst_add = this.pst_add;
    this.patient.pcity_add = this.pcity_add;
    this.patient.pprovi_add = this.pprovi_add;
    this.patient.ptreatment_type = this.ptreatment_type;
    this.patient.page = this.page;
    this.patient.psex = this.psex;
    this.patient.pbloodtype = this.pbloodtype;
    this.patient.pbdate = this.pbdate;

    // console.log(this.patient);
    this.ds.push_data('addpatient', this.patient).subscribe((data: any)=>{
  
      this.pat = data.payload;
      console.log(data);

      this.patient_id = '';
      this.pfname = '';
      this.pmname = '';
      this.plname = '';
      this.pcontact = '';
      this.pst_add = '';
      this.pcity_add = '';
      this.pprovi_add = '';
      this.ptreatment_type = '';
      this.page = '';
      this.psex = '';
      this.pbloodtype = '';
      this.pbdate = '';

    });

  }

  public searchpatient(){
    this.getPat = {

      "patient_id": this.pat_id


    };
    this.ds.push_data("searchpatient", this.getPat).subscribe((data: any)=>{ 
    this.getPat = data.payload.data;
    console.log(data);

      this.patient_id = this.getPat[0]['patient_id'];
      this.pfname = this.getPat[0]['pfname'];
      this.pmname = this.getPat[0]['pmname'];
      this.plname = this.getPat[0]['plname'];
      this.pcontact = this.getPat[0]['pcontact'];
      this.pst_add = this.getPat[0]['pst_add'];
      this.pcity_add = this.getPat[0]['pcity_add'];
      this.pprovi_add = this.getPat[0]['pprovi_add'];
      this.ptreatment_type = this.getPat[0]['ptreatment_type'];
      this.page = this.getPat[0]['page'];
      this.psex = this.getPat[0]['psex'];
      this.pbloodtype = this.getPat[0]['pbloodtype'];
      this.pbdate = this.getPat[0]['pbdate'];
    });
  }
}
