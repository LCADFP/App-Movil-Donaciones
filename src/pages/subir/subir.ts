import { Component } from '@angular/core';
import { ViewController,  AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo"; 
import { ShareService } from './../../services/share/share';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { DonacionServiceProvider } from './../../providers/donacion-service/donacion-service';
import 'rxjs/add/operator/toPromise';


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
  titulo: string = '';
  imagenPreview: string ='';
  imagen64: string;
  estadopro: string ='';
  categoria:string ='';
  Cantidad:string ='';
  descripcion:string ='';
  // posts = [];
  formDonacion : FormGroup;
  // Id:number;  

  constructor(private viewCtrl: ViewController,
    private camera: Camera,
    private imagePicker: ImagePicker,
    public _cap: CargaArchivoProvider, 
    public shareService: ShareService,
    public DonacionesService :DonacionServiceProvider,
    public fb:FormBuilder,
    private alertCtrl : AlertController) {
      // this.Id=JSON.parse(localStorage.getItem("user"))["id"];            
      // this.variableid(this.serviceData);
      this.formDonacion = this.fb.group({ //Validacion de campos

        titulo : [''],
        estadopro :[''],
        categoria :[''],
        Cantidad :[''],
        direccion :[''],
        descripcion :['']

      });    
         
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

   crear_post(){
      let archivo = {
      img: this.imagen64,
      // titulo: this.titulo,
      // estado: this.estadopro,
      // categoria: this.categoria,
      // cantidad: this.Cantidad,
      // descripcion : this.descripcion,
    titulo: this.formDonacion.value.titulo,
    estado: this.formDonacion.value.estadopro,
    categoria: this.formDonacion.value.categoria,
    cantidad: this.formDonacion.value.Cantidad,
    descripcion : this.formDonacion.value.descripcion,
    
     }
    this._cap.cargar_imagen_firebase(archivo)
      .then(()=>this.cerrar_modal() )
      // this.variableUrl(this.posts);
 } 
 
//  variableid(serviceData){
//     var objeto = JSON.parse(serviceData);
//     let id_user = objeto.id;
    
//  }

//  variableUrl(posts){
//      var objeto2 = JSON.parse(posts)
//      let DATA_URL = objeto2.img;
//  }

//  registroDonaciones(){
  // var objeto = JSON.parse(serviceData);
  // let users_id = objeto.id;
  // var objeto2 = JSON.parse(posts)
  // let DATA_URL = objeto2.img;
  // let imgurl=localStorage.getItem("posts");
  // let donacionData={
        
  //   nombre: this.formDonacion.value.titulo,
  //   estado: this.formDonacion.value.estadopro,
  //   categoria: this.formDonacion.value.categoria,
  //   cantidad: this.formDonacion.value.Cantidad,
  //   descripcion : this.formDonacion.value.descripcion,
  //   users_id : this.Id,
  // }
    // this.DonacionesService.postData(donacionData, "donacions/")
    // .subscribe(
    //   data => {
    //     this.showNotification(data);
    //   },
    // );   

    }

//     showNotification(data): any{

//       console.log(data);
//       this.alertCtrl.create({
//         title: " Hola " + data["descripcion"],
//         subTitle: "Registro exitoso",
//         message:"Ahora debes" + data["categoria"],
//         buttons: ['Ok']
//       }).present();
  
// } 

