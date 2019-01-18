import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EscolhalutasPage } from '../../pages/escolhalutas/escolhalutas'
import { EscolhadancasPage } from '../../pages/escolhadancas/escolhadancas'
import { LoginprofessorPage } from '../../pages/loginprofessor/loginprofessor'
import { StorageloginProvider } from './../../providers/storagelogin/storagelogin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  activate: boolean;
  usuario: any;

  constructor(public navCtrl: NavController,  private file: StorageloginProvider) {
   
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

  // TO-DO ----------------------
  // 4 spinners e 3 img input 

  Lutas(){ 
    this.navCtrl.push(EscolhalutasPage.name)
  }

  Dancas(){ 
    this.navCtrl.push(EscolhadancasPage.name)
  }

  Login(){
    this.navCtrl.push(LoginprofessorPage.name)
  }

  Deslogar(){
    this.file.deslogar("chave");
    this.navCtrl.setRoot(HomePage);
  }
}
