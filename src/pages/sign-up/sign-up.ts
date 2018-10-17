import { Component, asNativeElements } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  formRegistro : FormGroup;
     

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public fb:FormBuilder, public userService :UserServiceProvider, private alertCtrl : AlertController) {
    
    this.formRegistro = this.fb.group({ //Validacion de campos

      nombres :['', Validators.compose([Validators.required])],
      apellidos :['', Validators.required],
      fecha_nac :['', Validators.required],
      direccion :['', Validators.required],
      telefono :['', Validators.compose([Validators.required, Validators.minLength(7)])],      
      email :['', Validators.compose([Validators.required, Validators.email])],
      password :['', Validators.compose([Validators.required, Validators.minLength(6)])],
      password_confirmation :['', Validators.required]        
    
    });    
    
  }

     
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  //Envio de datos al backend
  registroUsuarios(){

    let userData={
      nombres: this.formRegistro.value.nombres,
      apellidos: this.formRegistro.value.apellidos,
      fecha_nac: this.formRegistro.value.fecha_nac,
      direccion: this.formRegistro.value.direccion,
      telefono :this.formRegistro.value.telefono,
      email : this.formRegistro.value.email,
      password: this.formRegistro.value.password,
      password_confirmation: this.formRegistro.value.password_confirmation

    }

      this.userService.postData(userData, "users")
      .subscribe(
        data => {
          this.showNotification(data);
          this.navCtrl.push(LoginPage);
        },

        err => {console.log(err); this.showError(err)}
      );   

  }

  showError(err){
    this.alertCtrl.create({
      title: "Registro Fallido",
      message: "La dirección de correo electrónico ya se encuentra registrada",
      buttons: ['Ok']
    }).present();
  }

  showNotification(data): any{

    console.log(data);
    this.alertCtrl.create({
      title: " Hola " + data["nombres"],
      subTitle: "Registro exitoso",
      message:"Ahora debes confirmar tu cuenta en la dirección de correo electrónico " + data["email"],
      buttons: ['Ok']
    }).present();

  }

  
  


}
