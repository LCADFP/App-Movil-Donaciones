import { ShareService } from './../../services/share/share';
import { HomefundacionPage } from './../homefundacion/homefundacion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Content } from 'ionic-angular'; 
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


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private userService:UserServiceProvider, public alertCtrl: AlertController, public shareService:ShareService) {
    
    this.formLogin = this.fb.group({ //Validacion de campos

      email :['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],  
      password :['', Validators.required]      

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // ionViewWillEnter(){
		
	// 	let user=localStorage.getItem("user");
	// 	let jwt=localStorage.getItem("jwt");
	// 	if(user && jwt ){
	// 		this.navCtrl.setRoot(HomefundacionPage);
	// 	}
	// }  

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
        localStorage.setItem('jwt', data["jwt"])
        this.validaterole(data);
        this.enviaraservicio();
        this.showNotification(data);
        

         
      err => {console.log(err); this.showError(err)}
    }
    );
  }

enviaraservicio(){
  let user=localStorage.getItem("user");
	let jwt=localStorage.getItem("jwt");
	if(user && jwt ){
    this.shareService.setUserName(user);
		}
}


validaterole(data):any{
   let rol= data.user.role_id
    
     if (rol === 2)
     {
       this.navCtrl.push(HomePage, {data});
     }
     else
     {
       this.navCtrl.push(HomefundacionPage, {data});
     }
     
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

    let msjporRol= data.user.role_id
    
    if (msjporRol === 2)
     {
      this.alertCtrl.create({
        title: "Hola "+ data.user.nombres,
        subTitle: "Ya puedes generar tus donaciones\n",
        buttons: ['Ok']
      }).present();
     }
     else
     {
      this.alertCtrl.create({
        title: "Hola "+ data.user.nombres,
        subTitle: "Ya puedes empezar a solicitar donaciones\n",
        buttons: ['Ok']
      }).present();
     }
     


	//	console.log(data)
		//this.alertCtrl.create({
			//title: "Hola "+ data.user.nombres,
			//subTitle: "Ya puedes generar tus donaciones\n",
			//buttons: ['Ok']
		//}).present();

  }

  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  goToForgotPass(){
    this.navCtrl.push(ForgotPassPage);
  }
  
}
