import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ModalController } from 'ionic-angular';
import { SubirPage } from '../subir/subir';

/**
 * Generated class for the FundacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fundaciones',
  templateUrl: 'fundaciones.html',
})
export class FundacionesPage {
  hayMas:boolean = true;
  fundacions: Observable<any[]>;

  constructor(private modalCtrl: ModalController,afDB: AngularFireDatabase) {
    this.fundacions = afDB.list('fundacion').valueChanges(); 
  }  
            mostrar_modal(){
          let modal = this.modalCtrl.create( SubirPage );
          modal.present();
      }
      doInfinite(infiniteScroll) {  }   
  }