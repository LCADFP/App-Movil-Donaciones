import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


/**
 * Vista de Subir Imagen
 *
 * 
 * Ionic pages and navegacion y metodos constructores.
 */

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {
  constructor(private viewCtrl: ViewController) {
  }
   cerrar_modal(){
    this.viewCtrl.dismiss();
  }
  
  mostrar_camara(){
    console.log("mostrando camara");
  }

  seleccionar_foto(){
  console.log("seleccionar foto");
  }

  crear_post(){
  console.log("crear post");
  }
} 


