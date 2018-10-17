import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { SignUpPage } from '../sign-up/sign-up';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';


@NgModule({
  declarations: [
    LoginPage,
    SignUpPage,
    ForgotPassPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
