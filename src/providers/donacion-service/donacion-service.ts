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
   userId:number;
   jwt=localStorage.getItem("jwt");
   apiUrl = 'https://apidonaciones.herokuapp.com/';
   
  constructor(public http: HttpClient) {
    console.log('Hello DonacionServiceProvider Provider');
    // localStorage.setItem("apiUrl","http://localhost:3000/")
    localStorage.setItem("apiUrl","https://apidonaciones.herokuapp.com/")
    
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
  
  postData(data) {       
   
    let headers = new HttpHeaders({
       'Content-Type': 'application/json'
    });
 
    const options = {headers:headers};
    let json = JSON.stringify(data);
    let apiUrl=localStorage.getItem("apiUrl");
    let completeUrl = apiUrl +'donacions';
    return this.http.post(completeUrl, json, options);
 
   } 
}
