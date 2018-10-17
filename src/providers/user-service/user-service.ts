import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
    localStorage.setItem("apiUrl","http://localhost:3000/")
    
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
