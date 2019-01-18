import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  nome ='';
  email = '';
  body = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {}
  
  send(){
     let email = {
      to: 'math.araujo@aluno.uece.br',
      cc: [],
      bcc: [],
      attachments: [],
      subject: 'Contato de' + this.nome,
      body: this.body,
      isHtml: false
      };
      this.emailComposer.open(email);
  } 
}
