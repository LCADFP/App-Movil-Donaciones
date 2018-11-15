import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';


/*
  Generated class for the DonacionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DonacionServiceProvider {

   apiUrl = 'https://apidonaciones.herokuapp.com/';

  constructor(public http: HttpClient) {
    console.log('Hello DonacionServiceProvider Provider');
    localStorage.setItem("apiUrl","https://apidonaciones.herokuapp.com/")
    
  }  

  postData(data, url) {       
   
   let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });

   const options = {headers:headers};
   let json = JSON.stringify(data);
   let apiUrl=localStorage.getItem("apiUrl");
   let completeUrl = apiUrl + url;
   return this.http.post(completeUrl, json, options);

  }
}
