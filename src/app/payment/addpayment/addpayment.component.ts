import { Component, OnInit } from '@angular/core';
import { payments } from 'src/app/data-schema';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.scss']
})
export class AddpaymentComponent implements OnInit {

  payment = new payments();
  pay:object;
  getPay:object;

  change: number;
  pay_id:number;
  payment_id:string;
  patient_name:string;
  doctor_name:string;
  ptype:string;
  treatment_price:string;
  pamount:string;
  pchange:string;
    

  constructor(public ds:DataService, private router:Router) { }

  ngOnInit(): void {

  }

    addpayment() {

      this.payment.patient_name = this.patient_name;
      this.payment.doctor_name = this.doctor_name;
      this.payment.ptype = this.ptype;
      this.payment.treatment_price = this.treatment_price;
      this.payment.pamount = this.pamount;
      this.payment.pchange = this.pchange;
  
      this.ds.push_data('addpayment', this.payment).subscribe((data: any)=>{
    
        this.pay = data.payload;
        console.log(data);
  
        this.patient_name = '';
        this.doctor_name = '';
        this.ptype = '';
        this.treatment_price = '';
        this.pamount = '';
        this.pchange = '';
  
  
      });
  
    }
  
    public searchpayment(){
      this.getPay = {
  
        "payment_id": this.pay_id
  
  
      };
      this.ds.push_data("searchpayment", this.getPay).subscribe((data: any)=>{ 
      this.getPay = data.payload.data;
      console.log(data);
  
      this.payment_id = this.getPay[0]['payment_id'];
        this.patient_name = this.getPay[0]['patient_name'];
        this.doctor_name = this.getPay[0]['doctor_name'];
        this.ptype = this.getPay[0]['ptype'];
        this.treatment_price = this.getPay[0]['treatment_price'];
        this.pamount = this.getPay[0]['pamount'];
        this.pchange = this.getPay[0]['pchange'];

  
      });
    }

    change1(){
      this.change = parseInt(this.pamount) - parseInt(this.treatment_price);
    }
  }
