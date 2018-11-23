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
    this.userId=JSON.parse(localStorage.getItem("user"))["id"];
    
  }  

  getdonaciones(uri) {
    
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
        ,
        'Authorization':'Bearer '+this.jwt
      });
      
    const options = { headers: headers };
        
    return this.http.get(this.apiUrl+this.userId+"/" + uri,options);
  }

  /*getDonaciones() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'donacions').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }*/
  

  /*postdonaciones(donacionData, uri) {
    
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
        ,
        'Authorization':'Bearer '+this.jwt
      });
      
    const options = { headers: headers };
      
    let json = JSON.stringify(donacionData);
    console.log(json);
    return this.http.post(this.apiUrl+"donacions/"+this.userId+"/" + uri, json, options);
  }*/ 
  
  postData(donacionData, uri) {       
   
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
        ,
        'Authorization':'Bearer '+this.jwt
      });

      const options = { headers: headers };
       
    let json = JSON.stringify(donacionData);
    console.log(json);
    
   
   return this.http.post(this.apiUrl+uri, json, options);
 
   }
}
