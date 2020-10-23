import { Component, OnInit } from '@angular/core';
import { accounts } from '../data-schema';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  account = new accounts();


  acc: Object;
  adoctor_id: string;
  arole: string;
  ausername: string;
  apassword: string;


  constructor(public ds: DataService ) { }

  ngOnInit(): void {

  }
  addaccounts() {

    this.account.adoctor_id = this.adoctor_id;
    this.account.ausername = this.ausername;
    this.account.apassword = this.apassword;
    this.account.arole = this.arole;
    console.log(this.account);
    this.ds.push_data('addaccounts', this.account).subscribe((data: any)=>{
  
      this.acc = data.payload;
      // console.log(data);
    });
  }
  
}


