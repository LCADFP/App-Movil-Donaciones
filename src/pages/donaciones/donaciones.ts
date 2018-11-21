import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ModalController } from 'ionic-angular';
import { SubirPage } from '../subir/subir';
import { ShareService } from './../../services/share/share';
/**
 * Generated class for the DenunciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donaciones',
  templateUrl: 'donaciones.html',
})

export class DonacionesPage {
  hayMas:boolean = true;
  posts: Observable<any[]>;
  serviceData: {};
 
  constructor(private modalCtrl: ModalController,afDB: AngularFireDatabase, public shareService: ShareService ) {
      this.posts = afDB.list('post').valueChanges(); 
      this.serviceData =shareService.getUserName();
      // localStorage.setItem('user', JSON.stringify(this.serviceData["user"]));
      this.variableid(this.serviceData);
    }  

  // ionViewWillEnter(){
  //   let data = JSON.parse(localStorage.getItem('data'));
  // }

  variableid(serviceData){
     var objeto = JSON.parse(serviceData);
     let id = objeto.nombres
     if (id === "luis")
     {
      console.log(id);
     }
  }

  mostrar_modal(){
          let modal = this.modalCtrl.create( SubirPage);
          modal.present();
  }
      doInfinite(infiniteScroll) {  }
      compartir( post:any ){ }    


 
}




