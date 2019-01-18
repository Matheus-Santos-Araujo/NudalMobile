import { HomePage } from './../home/home';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { ModalidadePage } from './../modalidade/modalidade';
import { Modalidade } from './../../modelos/modalidade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ServidorservletProvider } from './../../providers/servidorservlet/servidorservlet';

@IonicPage()
@Component({
  selector: 'page-escolhadancas',
  templateUrl: 'escolhadancas.html',
})
export class EscolhadancasPage {

  dancas: any[] = [];
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
        for (var i = 0; i < result.lista.filter(function(d){return d.tipo == "danca";}).length; i++) {
          var danca = result.lista.filter(function(d){return d.tipo == "danca";})[i];
          this.dancas.push(danca); 
          loading.dismiss().catch(() => {});
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os dancas. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();
        loading.dismiss().catch(() => {}); 
      });
    }

  detalhedanca(danca: Modalidade){
    this.navCtrl.push(ModalidadePage, { model: danca});
  }

  Deslogar(){
    this.file.deslogar("chave");
    this.navCtrl.setRoot(HomePage);
  }
} 