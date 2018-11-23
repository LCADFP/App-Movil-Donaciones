import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';

/**
 * Generated class for the DonacionesrecibidasfundacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donacionesrecibidasfundacion',
  templateUrl: 'donacionesrecibidasfundacion.html',
})
export class DonacionesrecibidasfundacionPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonacionesrecibidasfundacionPage');
  }

  infodonacionesrecibidas() {
    this.alertCtrl.create({
    title: " Aviso ",
    subTitle: "El proceso de entrega de donaciones tiene un tiempo máximo de 7 días para ser finalizado. \n",
    buttons: ['Ok']
  }).present();

}


}
