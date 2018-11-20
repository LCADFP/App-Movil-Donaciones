import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo"; 
import { ShareService } from './../../services/share/share';

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
  titulo: string = "";
  imagenPreview: string = "";
  imagen64: string;
  serviceData: any;

  constructor(private viewCtrl: ViewController,
    private camera: Camera,
    private imagePicker: ImagePicker,
    public _cap: CargaArchivoProvider, 
    public shareService: ShareService) {

      this.serviceData = shareService.getUserName();
  }
   cerrar_modal(){
    this.viewCtrl.dismiss();
  }
  
  mostrar_camara(){
    const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
    this.camera.getPicture(options).then((imageData) => {
     this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
     this.imagen64 = imageData;
    }, (err) => {
     // Handle error
     console.log( "ERROR EN CAMARA", JSON.stringify(err) );
    });
  }

  seleccionar_foto(){
    let opciones:ImagePickerOptions = {
      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }
    this.imagePicker.getPictures(opciones).then((results) => {

      for (var i = 0; i < results.length; i++) {
          this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
          this.imagen64 = results[i];
      }

    }, (err) => {

      console.log( "ERROR en selector", JSON.stringify(err) );

    });
   }

   crear_post(serviceData){
    let archivo = {
      img: this.imagen64,
      titulo: this.titulo,
      id_current_user : serviceData.user.id_user
  }
    this._cap.cargar_imagen_firebase(archivo)
      .then(()=>this.cerrar_modal() )
 }
} 


