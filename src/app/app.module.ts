import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; //Necesario para consumir API REST
import { CompareValidatorModule } from 'angular-compare-validator';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import {DonacionesPage} from '../pages/donaciones/donaciones'
import { SubirPage } from '../pages/subir/subir';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { Camera } from '@ionic-native/camera';

export const firebaseConfig = {
  apiKey: "AIzaSyD-cXfMVY0m5GR2dUoT2IlYYQ_V13m230w",
  authDomain: "a-donar-se-dijo.firebaseapp.com",
  databaseURL: "https://a-donar-se-dijo.firebaseio.com",
  projectId: "a-donar-se-dijo",
  storageBucket: "a-donar-se-dijo.appspot.com",
  messagingSenderId: "702629923733"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    LoginPage,
    SignUpPage,
    ForgotPassPage,
    DonacionesPage,
    SubirPage
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
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    LoginPage,
    SignUpPage,
    ForgotPassPage,
    DonacionesPage,
    SubirPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
