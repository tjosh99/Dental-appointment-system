import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { LoginData } from '../data-schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = new LoginData();

  constructor(private ds: DataService, private user: UserService, private router: Router) { }

  ngOnInit() {
    if(this.user.getUserLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

 checkCredentials(e) {
    e.preventDefault();
    this.credentials.username = e.target.elements.username.value;
    this.credentials.password = e.target.elements.password.value;

    this.ds.pull_data_notoken('login', this.credentials).subscribe((data: any)=>{
      console.log(data);
      let a=data.payload;
      this.user.setUserLoggedIn(a.token, a.empno, a.empname);
      this.router.navigate(['dashboard']);
    }, er => {
      console.log(er.error.status.remarks, er.error.status.message);
      alert(er.error.status.message);
    });
  }

  link(){
    this.router.navigate(['register']);
  }
}


