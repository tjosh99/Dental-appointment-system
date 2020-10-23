import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private var_url: string = 'http://localhost/api-dental/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private user: UserService) { }

  pull_data(api: string, data: any) {
    this.headers = new HttpHeaders ({
      'Authorization': this.user.getToken(),
      'X-Auth-User': this.user.getID()
    });
    let options = { headers: this.headers };
    return this.http.post(this.var_url+api, JSON.stringify(data), options);
  }

  push_data(api: string, data: any){
    return this.http.post(this.var_url+api, JSON.stringify(data));

  }
  pull_data_notoken(api, data) {
    return this.http.post(this.var_url+api, JSON.stringify(data));  
  }

  public getdata(api :any) {
    return this.http.get(this.var_url+api);
    
  }
}
