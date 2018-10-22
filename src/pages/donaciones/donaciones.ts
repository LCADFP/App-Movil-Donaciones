import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ModalController } from 'ionic-angular';
import { SubirPage } from '../subir/subir';


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

  constructor(private modalCtrl: ModalController,afDB: AngularFireDatabase) {
    this.posts = afDB.list('post').valueChanges(); 
  }  
            mostrar_modal(){
          let modal = this.modalCtrl.create( SubirPage );
          modal.present();
      }
      doInfinite(infiniteScroll) {  }
      compartir( post:any ){ }    

  // takeSelfie() {
  //   this.cameraPlugin.getPicture({
  //     quality : 95,
  //     destinationType : this.cameraPlugin.DestinationType.DATA_URL,
  //     sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
  //     allowEdit : true,
  //     encodingType: this.cameraPlugin.EncodingType.PNG,
  //     targetWidth: 500,
  //     targetHeight: 500,
  //     saveToPhotoAlbum: true
  //   }).then(profilePicture => {
  //     // Send the picture to Firebase Storage
  //     const selfieRef = firebase.storage().ref('profilePictures/user1/profilePicture.png');
  //     selfieRef
  //     .putString(profilePicture, 'base64', {contentType: 'image/png'})
  //     .then(savedProfilePicture => {
  //     firebase
  //       .database()
  //       .ref(`users/user1/profilePicture`)
  //       .set(savedProfilePicture.downloadURL);
  //     });
  //   }, error => {
  //     // Log an error to the console if something goes wrong.
  //     console.log("ERROR -> " + JSON.stringify(error));
  //   });
  // }
}




