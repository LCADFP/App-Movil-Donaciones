import { DonaciondisponiblefundacionPage } from './../donaciondisponiblefundacion/donaciondisponiblefundacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonacionesPage } from '../donaciones/donaciones';
import { FundacionesPage} from '../fundaciones/fundaciones';
import { PasoapasofundacionPage } from '../pasoapasofundacion/pasoapasofundacion';
import { DonacionesrecibidasfundacionPage } from '../donacionesrecibidasfundacion/donacionesrecibidasfundacion';
import { DonacionespendientesPage} from '../donacionespendientes/donacionespendientes';
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

  godonacionesdisponibles()
  {
    this.navCtrl.push(DonaciondisponiblefundacionPage);
  }

  godonacionespendientes()
  {
    this.navCtrl.push(DonacionespendientesPage);
  }

  gopasoapasofundacion()
  {
    this.navCtrl.push(PasoapasofundacionPage);
  }

  godonacionesrecbidas(){
    this.navCtrl.push(DonacionesrecibidasfundacionPage);
  }

}



