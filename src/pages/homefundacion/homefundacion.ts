import { DonaciondisponiblefundacionPage } from './../donaciondisponiblefundacion/donaciondisponiblefundacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonacionesPage } from '../donaciones/donaciones';
import { FundacionesPage} from '../fundaciones/fundaciones';
import { PasoapasofundacionPage } from '../pasoapasofundacion/pasoapasofundacion';
import { DonacionesrecibidasfundacionPage } from './../donacionesrecibidasfundacion/donacionesrecibidasfundacion';

/**
 * Generated class for the HomefundacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homefundacion',
  templateUrl: 'homefundacion.html',
})
export class HomefundacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  godonacion1()
  {
    this.navCtrl.push(DonaciondisponiblefundacionPage);
  }

  gopasoapasofundacion()
  {
    this.navCtrl.push(PasoapasofundacionPage);
  }

  godonacionesrecbidas(){
    this.navCtrl.push(DonacionesrecibidasfundacionPage);
  }

  godonacionesdisponibles(){
    this.navCtrl.push(DonaciondisponiblefundacionPage);
  }

}



