import { DialogverinscricaoPage } from './../dialogverinscricao/dialogverinscricao';
import { DialogeditarmodalidadePage } from './../dialogeditarmodalidade/dialogeditarmodalidade';
import { DialogaddtopicosPage } from './../dialogaddtopicos/dialogaddtopicos';
import { Login } from './../../modelos/login';
import { Inscricao } from './../../modelos/inscricao';
import { Topico } from './../../modelos/topico';
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { CadastroPage } from './../cadastro/cadastro';
import { Modalidade } from './../../modelos/modalidade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { ServidorservletProvider } from './../../providers/servidorservlet/servidorservlet';

@IonicPage()
@Component({
  selector: 'page-modalidade',
  templateUrl: 'modalidade.html',
})
export class ModalidadePage {

  model: Modalidade;
  novotopico: Topico;
  state: boolean = false;
  state2: boolean = false;
  state3: boolean = false;
  loadtop: boolean = true;
  loadinsc: boolean = true;
  activate: boolean;
  activatefuctions: boolean = false;
  usuario: any;
  user: Login;
  topicos: any[] = []; 
  inscricoes: any[] = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private file: StorageloginProvider,  private servidor: ServidorservletProvider, private toast: ToastController, public dialog: AlertController, public popoverCtrl: PopoverController) {
    if (this.navParams.data.model) {
      this.model = this.navParams.data.model;
    }

    this.file.pegaUsuario()
    .then((user: any) => {
      if(user != null) {
        this.activate = true;
        this.usuario = user.email;
        this.user = user;
        console.log(this.usuario);
      } else {
        this.activate = false;
      }

      if( this.usuario == this.model.professor){
        this.activatefuctions = true;
      } else {
        this.activatefuctions = false;
      }

    });
  }

  Inscricao(){
    this.navCtrl.push(CadastroPage.name, {id: this.model.id, foto64: this.model.foto64}); 
  }
  ionViewDidLoad() {
  this.servidor.pegarTopicos(this.model)
    .then((result: any) => {
      this.loadtop = false;
      for (var i = 0; i < result.lista.length; i++) {
        var topico = result.lista[i];
        this.topicos.push(topico);
      }
    })
    .catch((error: any) => {
       this.loadtop = false;
      this.toast.create({ message: 'Erro ao listar os dancas. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();  
    });

    this.servidor.pegarInscricoes(this.model)
    .then((result: any) => {
      this.loadinsc = false;
      for (var i = 0; i < result.lista.length; i++) {
        var inscricao = result.lista[i];
        this.inscricoes.push(inscricao);
      }
    })
    .catch((error: any) => {
      this.loadinsc = false;
      this.toast.create({ message: 'Erro ao listar os dancas. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();  
    });
 }

  dialogeditarmodalidade(){
    let popover = this.popoverCtrl.create(DialogeditarmodalidadePage, {modalidade: this.model});
    popover.present();
  }

  dialogaddtopico(){
    let popover = this.popoverCtrl.create(DialogaddtopicosPage, {img: this.model.foto64, id: this.model.id, topicos: this.topicos});
    popover.onDidDismiss(topico => {
      if (topico != null){
      this.topicos.push(topico); 
      console.log(topico);
    }
  });
    popover.present();
  }

  dialogvertopico(topico: Topico){
    let alert = this.dialog.create({
      title: topico.titulo +'',
      subTitle: topico.texto + ''
    });
    alert.present();
  }

  dialogverhorario(){
    let alert = this.dialog.create({
      title: 'Horários',
      subTitle: this.model.horario + ''
    });
    alert.present();
  }

  dialogverinscricao(inscricao: Inscricao){
    let popover = this.popoverCtrl.create(DialogverinscricaoPage, {inscricao: inscricao});
    popover.present();
  }

  deletarTopico(topico: Topico) {
    let alert = this.dialog.create({
      subTitle: 'Deseja mesmo remover este tópico?',
      buttons: [
        {
          text: 'NÃO',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
            return false;
          }
        },
        {
          text: 'SIM',
          handler: () => {
              let index = this.topicos.indexOf(topico);
              this.topicos.splice(index, 1);
              this.servidor.deletarTopico(this.user, topico)
              .then((result: any) => {
                this.toast.create({ message: 'Sucesso ao deletar tópico. Resultado: ' + result.resultado, position: 'botton', duration: 3000 }).present();  
              })
              .catch((error: any) => {
                this.toast.create({ message: 'Erro ao deletar topico. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();  
              });
          }
        }
      ]
    });
    alert.present();
  }

  deletarInscricao(inscricao: Inscricao) {
    let alert = this.dialog.create({
      subTitle: 'Deseja mesmo remover essa inscrição?',
      buttons: [
        {
          text: 'NÃO',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
            return false;
          }
        },
        {
          text: 'SIM',
          handler: () => {
            let index = this.inscricoes.indexOf(inscricao);
            this.inscricoes.splice(index, 1);
            this.servidor.deletarInscricao(this.user, inscricao)
            .then((result: any) => {
              this.toast.create({ message: 'Sucesso ao deletar inscricao. Resultado: ' + result.resultado, position: 'botton', duration: 3000 }).present(); 
            })
            .catch((error: any) => {
              this.toast.create({ message: 'Erro deletar inscricao. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();  
            });
          }
        }
      ]
    });
    alert.present();
  }
 }
