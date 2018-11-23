
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; //Necesario para consumir API REST
import { CompareValidatorModule } from 'angular-compare-validator';
import { PipesModule} from '../pipes/pipes.module';

import { MyApp } from './app.component';
import { PerfiluserPage } from '../pages/perfiluser/perfiluser';
import { AcercadePage } from '../pages/acercade/acercade';
import { HomePage } from '../pages/home/home';
import { HomefundacionPage } from './../pages/homefundacion/homefundacion';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { DonacionesPage} from '../pages/donaciones/donaciones'
import { FundacionesPage} from '../pages/fundaciones/fundaciones'
import { SubirPage } from '../pages/subir/subir';
import { TipsPage } from '../pages/tips/tips';
import { DonaciondisponiblefundacionPage } from './../pages/donaciondisponiblefundacion/donaciondisponiblefundacion';
import { PasoapasofundacionPage } from './../pages/pasoapasofundacion/pasoapasofundacion';
import { HistorialdonacionesuserPage} from '../pages//historialdonacionesuser/historialdonacionesuser';
import { DonacionesrecibidasfundacionPage } from '../pages/donacionesrecibidasfundacion/donacionesrecibidasfundacion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ImagePicker } from '@ionic-native/image-picker';
import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';
import { DonacionServiceProvider } from '../providers/donacion-service/donacion-service';
import { ShareService } from '../services/share/share';



export const firebaseConfig = {
  apiKey: "AIzaSyAOWXgb7qrR0i6lf-Qyx52V8hxyUARoUCk",
  authDomain: "a-donar-se-dijo-f6243.firebaseapp.com",
  databaseURL: "https://a-donar-se-dijo-f6243.firebaseio.com",
  projectId: "a-donar-se-dijo-f6243",
  storageBucket: "a-donar-se-dijo-f6243.appspot.com",
  messagingSenderId: "335639534856"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    LoginPage,
    SignUpPage,
    ForgotPassPage,
    DonacionesPage,
    FundacionesPage,
    HomefundacionPage,
    DonaciondisponiblefundacionPage,
    SubirPage,
    TipsPage,
    PasoapasofundacionPage,
    AcercadePage,
    PerfiluserPage,
    HistorialdonacionesuserPage,
    DonacionesrecibidasfundacionPage
  ],

  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    HttpClientModule,//Para consumir API REST     
    IonicModule.forRoot(MyApp),
    CompareValidatorModule, //Comparador de campos input 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    LoginPage,
    SignUpPage,
    ForgotPassPage,
    DonacionesPage,
    FundacionesPage,
    HomefundacionPage,
    DonaciondisponiblefundacionPage,
    SubirPage,
    TipsPage,
    PasoapasofundacionPage,
    AcercadePage,
    PerfiluserPage,
    HistorialdonacionesuserPage,
    DonacionesrecibidasfundacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    CargaArchivoProvider,
    ShareService,
    DonacionServiceProvider
  ]
})
export class AppModule {}
