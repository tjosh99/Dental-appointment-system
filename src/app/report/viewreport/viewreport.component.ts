import { Component, OnInit } from '@angular/core';
import { payments } from '../../data-schema';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.scss']
})
export class ViewreportComponent implements OnInit {


  payment = new payments();
  pay:object;

  pay_id:number;
    payment_id:string;
    pdate:string;
    patient_name:string;
    doctor_name:string;
    ptype:string;
    pamount:string;
    
  subscript: Subscription;

  constructor(public ds: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getpayment();

  }
    
    getpayment(){
      this.subscript = this.ds.push_data('showpayment', this.payment).subscribe((data: any)=>{
      
      this.pay = data.payload.data;


    });

  }
  }
