import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
 
  userId:number;
  apiUrl = 'http://localhost:3000/';
  jwt=localStorage.getItem("jwt");

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
    localStorage.setItem("apiUrl","http://localhost:3000/")
    this.userId=JSON.parse(localStorage.getItem("user"))["id"];
    
    
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
  
  getdatosuser() {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json' //tener esta linea en cuenta parece que era la uri
        ,
        'Authorization':'Bearer '+this.jwt
      });
      const options = { headers: headers };
    return new Promise(resolve => {
      //this.http.get(this.apiUrl+'users')
      this.http.get(this.apiUrl+"users/"+this.userId+"/" + options).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }  
  
  //

  /*getdatosuser(uri) {
    
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
        ,
        'Authorization':'Bearer '+this.jwt
      });
      
    const options = { headers: headers };
        
    return this.http.get(this.apiUrl+"users/"+this.userId+"/" + uri,options);
  }*/

  

}

