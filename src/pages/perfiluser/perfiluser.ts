import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the PerfiluserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfiluser',
  templateUrl: 'perfiluser.html',
})



export class PerfiluserPage {


  datosdelusuario: any ;

  constructor(public navCtrl: NavController, private userService:UserServiceProvider, public navParams: NavParams) {
     this.getdatosuser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfiluserPage');
  }

  getdatosuser() {
     this.userService.getdatosuser()
    .then(data => {
      this.datosdelusuario = data;
      console.log(this.datosdelusuario);
    });
  
  }
 
}


