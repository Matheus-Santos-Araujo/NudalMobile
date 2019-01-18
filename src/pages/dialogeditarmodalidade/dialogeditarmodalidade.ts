import { Modalidade } from './../../modelos/modalidade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController, ViewController } from 'ionic-angular';
import { ServidorservletProvider } from './../../providers/servidorservlet/servidorservlet';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { Login } from '../../modelos/login';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-dialogeditarmodalidade',
  templateUrl: 'dialogeditarmodalidade.html',
})
export class DialogeditarmodalidadePage {

  modalidade: Modalidade;
  user: Login;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dialog: PopoverController, private servidor: ServidorservletProvider, private toast: ToastController, private file: StorageloginProvider, public viewCtrl: ViewController,  private camera: Camera) {
   
    this.file.pegaUsuario()
    .then((user: any) => {
      if(user != null) {
        this.user = user;
      }
    });

  this.modalidade = new Modalidade();  
  if (this.navParams.data.modalidade) { this.modalidade.foto64 = this.navParams.data.modalidade.foto64; }
  this.modalidade.id = this.navParams.data.modalidade.id;
  this.modalidade.informacoes = this.navParams.data.modalidade.informacoes;
  this.modalidade.horario = this.navParams.data.modalidade.horario;
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
        this.modalidade.foto64 = imageData;
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  editmodalidade(){ 
    this.viewCtrl.dismiss();
    this.servidor.alterarModalidade(this.user,this.modalidade)
    .then((result: any) => {
      this.toast.create({ message: 'Seu pedido de alteração foi enviado.', position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao alterar modalidade. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();
    });
}
}