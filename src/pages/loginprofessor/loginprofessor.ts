import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';
import { Login } from './../../modelos/login';
import { Component } from '@angular/core';
import { ServidorservletProvider } from './../../providers/servidorservlet/servidorservlet';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-loginprofessor',
  templateUrl: 'loginprofessor.html',
})
export class LoginprofessorPage {

  model: Login;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servidor: ServidorservletProvider, private toast: ToastController, private file:StorageloginProvider) {
    this.model = new Login();
    this.model.id = "0";
    this.model.email  ='';
    this.model.senha  = '';
    this.model.tipo  = '';
  }

  ionViewDidLoad() {}

splash(){
  this.navCtrl.push('SplashPage'); 
}

login() {
  this.servidor.login(this.model)
    .then((result: any) => {
      if (result.resultado == "loginAceito"){
      this.toast.create({ message: 'Login realizado com sucesso. Resultado: ' + result.resultado, position: 'botton', duration: 3000 }).present();  
      this.navCtrl.setRoot(HomePage); 
      return this.file.logar(this.model); 
    } else {
      this.toast.create({ message: 'Dados inválidos...', position: 'botton', duration: 3000 }).present();  
    }  
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao logar. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();
    });
 }

 alterarsenha() {
  this.servidor.recuperarSenha(this.model.email)
    .then((result: any) => {
      this.toast.create({ message: 'Sua senha foi enviada para seu email cadastrado. Resultado: ' + result.resultado, position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao resetar a senha. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();
    });
 }
}
