import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DonacionesPage } from '../donaciones/donaciones';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }  

  godonacion()
  {
    this.navCtrl.push(DonacionesPage);
  }
 

}
