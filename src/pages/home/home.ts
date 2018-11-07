import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipsPage } from '../tips/tips'; 
import { DonacionesPage } from '../donaciones/donaciones';
import { FundacionesPage} from '../fundaciones/fundaciones';



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
 
  gofundacion()
  {
    this.navCtrl.push(FundacionesPage);
  }

  gotips()
  {
    this.navCtrl.push(TipsPage);
  }

}
