import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
 

/**
 * Generated class for the HistorialdonacionesuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historialdonacionesuser',
  templateUrl: 'historialdonacionesuser.html',
})
export class HistorialdonacionesuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialdonacionesuserPage');
  }

  infohistorial() {
			this.alertCtrl.create({
			title: " Importante! ",
			subTitle: "El proceso de entrega de donaciones tiene un tiempo máximo de 7 días para ser completado. \n",
			buttons: ['Ok']
		}).present();

  }

}
