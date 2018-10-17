import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { HomePage } from '../home/home';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin : FormGroup;  

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private userService:UserServiceProvider, public alertCtrl: AlertController ) {
    
    this.formLogin = this.fb.group({ //Validacion de campos

      email :['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],  
      password :['', Validators.required]      

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter(){
		
		let user=localStorage.getItem("user");
		let jwt=localStorage.getItem("jwt");
		if(user && jwt ){
			this.navCtrl.setRoot(HomePage);
		}
	}  

  loginUsuario(){

    let userData={
			auth:{
				email:this.formLogin.value.email,
				password:this.formLogin.value.password
      }   
    }

    this.userService.postData(userData, "user_token")
    .subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data["user"]));
        localStorage.setItem('jwt', data["jwt"]);
        this.showNotification(data);
        this.navCtrl.setRoot(HomePage);
      },

      err => {console.log(err); this.showError(err)}
    );
  }

  showError(err): any {
		let errors={
      404:"El correo electrónico o la contraseña estan errados",
      401: "No ha confirmado su cuenta"
		}
		this.alertCtrl.create({
			title: "¡Error!",
      message: errors[err.status],      
			buttons: ['Ok']
		}).present();
  }
  
	showNotification(data): any {
		console.log(data)
		this.alertCtrl.create({
			title: "Hola "+ data.user.nombres,
			subTitle: "Ya puedes generar tus donaciones\n",
			buttons: ['Ok']
		}).present();

  }

  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  goToForgotPass(){
    this.navCtrl.push(ForgotPassPage);
  }
  
}
