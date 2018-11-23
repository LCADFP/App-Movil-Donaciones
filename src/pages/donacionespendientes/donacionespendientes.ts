import { DonacionServiceProvider } from './../../providers/donacion-service/donacion-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DonacionespendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donacionespendientes',
  templateUrl: 'donacionespendientes.html',
})
export class DonacionespendientesPage {
  donaciones: any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DonacionesService :DonacionServiceProvider) {
    this.getDonaciones();
  }
  
  /* 
  metodo para traer datos de donaciones desde Donaciones providers
  */
    getDonaciones() {
      this.DonacionesService.getDonaciones()
      .then(data => {
        this.donaciones = data;
        console.log(this.donaciones);
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonacionespendientesPage');
  }

}
