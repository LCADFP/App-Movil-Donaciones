import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the DonacionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonacionServiceProvider {

   apiUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
    console.log('Hello DonacionServiceProvider Provider');
    localStorage.setItem("apiUrl","http://localhost:3000/")
  }  

  getDonaciones() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'donacions').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
