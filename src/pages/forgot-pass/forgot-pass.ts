import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgotPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {

  formRememberPass : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb : FormBuilder, public alertCtrl: AlertController, private userService:UserServiceProvider) {

    this.formRememberPass = this.fb.group({
      email :['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPassPage');
  }

  rememberPass(){

    let Userdata ={ email: this.formRememberPass.value.email}

    this.userService.postData(Userdata, "password_resets")
      .subscribe(
        data => {
          this.showNotification(data);
          this.navCtrl.push(LoginPage);
        },

        err => {console.log(err); this.showError(err)}
      );

  }

  showError(err): any {
		let errors={
			422:"Tu correo electrónico no se encuentra registrado"
		}
		this.alertCtrl.create({
			title: "¡Error!",
			subTitle: errors[err.status],
			buttons: ['Ok']
		}).present();
  }

	showNotification(data): any {
		console.log(data)
		this.alertCtrl.create({
			title: "Envio correcto" +"\n",
			subTitle: "Revisa tu correo electrónico, se han enviado instrucciones",
			buttons: ['Ok']
		}).present();

  }


}
