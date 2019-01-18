import { Login } from './../../modelos/login';
import { Topico } from './../../modelos/topico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController, ViewController } from 'ionic-angular';
import { ServidorservletProvider } from './../../providers/servidorservlet/servidorservlet';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { ModalidadePage } from '../modalidade/modalidade';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-dialogaddtopicos',
  templateUrl: 'dialogaddtopicos.html',
})
export class DialogaddtopicosPage {

  topico: Topico;
  user: Login;
  state = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dialog: PopoverController, private servidor: ServidorservletProvider, private toast: ToastController, private file: StorageloginProvider, public viewCtrl: ViewController,  private camera: Camera) {
  
    this.file.pegaUsuario()
    .then((user: any) => {
      if(user != null) {
        this.user = user;
      }
    });
  this.topico = new Topico();
  if (this.navParams.data.img) { this.topico.foto64 = this.navParams.data.img; }
  this.topico.id = "0";
  this.topico.texto = '';
  this.topico.titulo = '';
  this.topico.modalidade = this.navParams.data.id;
}
  
  ionViewDidLoad() {}

  getImage(){
    const options: CameraOptions = {
      quality: 90,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,    
    }
  
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.topico.foto64 = imageData;
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  addtopico(){ 
    this.viewCtrl.dismiss(this.topico);
    this.servidor.inserirTopico(this.user,this.topico)
    .then((result: any) => {
      this.toast.create({ message: 'Tópico adicionado com sucesso. Resultado: ' + result.detalhe, position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao adicionar tópico. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();
    });
}
  }

