import { DonacionServiceProvider } from './../../providers/donacion-service/donacion-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


/**
 * Generated class for the DonaciondisponiblefundacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donaciondisponiblefundacion',
  templateUrl: 'donaciondisponiblefundacion.html',
})
export class DonaciondisponiblefundacionPage {
  donaciones: any ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public DonacionesService :DonacionServiceProvider) {
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
    console.log('ionViewDidLoad DonaciondisponiblefundacionPage');
  }

}