import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonacionespendientesPage } from './donacionespendientes';

@NgModule({
  declarations: [
    DonacionespendientesPage,
  ],
  imports: [
    IonicPageModule.forChild(DonacionespendientesPage),
  ],
})
export class DonacionespendientesPageModule {}
