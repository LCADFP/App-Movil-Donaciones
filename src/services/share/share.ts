import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
	
    Datacurrentuser: any;

    constructor() {
        this.Datacurrentuser = {};
    }
 
    setUserName(Datacurrentuser) {
        this.Datacurrentuser = Datacurrentuser;      
    }
 
    getUserName() {
        return this.Datacurrentuser;
    }  
}