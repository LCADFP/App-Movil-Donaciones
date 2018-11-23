
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  posts: Observable<any[]>;

  constructor(afDB: AngularFireDatabase ) {
    this.posts = afDB.list('post').valueChanges();   
  }
  
/* 
metodo para traer datos de donaciones desde Donaciones providers
*/
  // getDonaciones() {
  //   this.DonacionesService.getDonaciones()
  //   .then(data => {
  //     this.donaciones = data;
  //     console.log(this.donaciones);
  //   });
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaciondisponiblefundacionPage');
  }

  /*infbtnloquiero() {
    this.alertCtrl.create({
    title: " Muy bien! ",
    subTitle: "Recuerda, tienes 7 dias para concretar la donación y finalizarla \n",
    buttons: ['Ok']
  }).present();

  }*/

  

  //enviaradonap(){

  //}

}
