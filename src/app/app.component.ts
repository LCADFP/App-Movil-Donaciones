import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {DonacionesPage} from '../pages/donaciones/donaciones';
import {FundacionesPage} from '../pages/fundaciones/fundaciones';
import { TipsPage } from './../pages/tips/tips';
import { AcercadePage } from './../pages/acercade/acercade';
import { PerfiluserPage } from './../pages/perfiluser/perfiluser';


import { ITEMS_MENU } from "../data/data.menu";
import { Menu } from "../interfaces/menu.interface";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  menu:Menu[] = [];


  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Nueva Donacion', component: DonacionesPage },  
      { title: 'Fundaciones disponibles', component: FundacionesPage }, 
      { title: 'Tips para donar', component: TipsPage }
    ];

    this.menu = ITEMS_MENU.slice(0);

  } 
  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goacercade() {
    this.nav.push(AcercadePage);
  }

  goperfiluser() {
    this.nav.push(PerfiluserPage);
  }
    
  logout(){
  
    localStorage.removeItem("jwt"); //Se elimina el token jwt de la session

    if(localStorage.removeItem("jwt")==null){
      this.nav.push(LoginPage);
    }
    
  }

  
}
