import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { ModalidadePage } from './../modalidade/modalidade';
import { HomePage } from './../home/home';
import { Modalidade } from './../../modelos/modalidade';
import { ServidorservletProvider } from './../../providers/servidorservlet/servidorservlet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-escolhalutas',
  templateUrl: 'escolhalutas.html',
})
export class EscolhalutasPage {

  lutas: any[] = []; 
  activate: boolean;
  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servidor: ServidorservletProvider, private toast: ToastController,  private pb: LoadingController, private file: StorageloginProvider) {
    this.file.pegaUsuario()
       .then((user: any) => {
         if(user != null) {
           this.activate = true;
           this.usuario = user.email;
           console.log(this.usuario);
         } else {
           this.activate = false;
         }
       });
  }

  ionViewDidLoad() {

    let loading = this.pb.create({});

    loading.present();

    this.servidor.pegarModalidades()
    .then((result: any) => {
      for (var i = 0; i < result.lista.filter(function(d){return d.tipo == "luta";}).length; i++) {
        var luta = result.lista.filter(function(d){return d.tipo == "luta";})[i];
        this.lutas.push(luta);
        loading.dismiss().catch(() => {});
      }
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao listar as lutas. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();
      loading.dismiss().catch(() => {});   
    });
  }

    detalheluta(luta: Modalidade){
      this.navCtrl.push(ModalidadePage, { model: luta});
    }

    Deslogar(){
      this.file.deslogar("chave");
      this.navCtrl.setRoot(HomePage);
    }
}

