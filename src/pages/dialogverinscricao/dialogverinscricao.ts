import { Inscricao } from './../../modelos/inscricao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dialogverinscricao',
  templateUrl: 'dialogverinscricao.html',
})
export class DialogverinscricaoPage {

  inscricao: Inscricao;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inscricao = new Inscricao();
    this.inscricao.nome  = this.navParams.data.inscricao.nome;
    this.inscricao.telfixo = this.navParams.data.inscricao.telfixo;
    this.inscricao.telcelular = this.navParams.data.inscricao.telcelular;
    this.inscricao.email = this.navParams.data.inscricao.email;
    this.inscricao.endereco_rua = this.navParams.data.inscricao.endereco_rua;
    this.inscricao.endereco_numero = this.navParams.data.inscricao.endereco_numero;
    this.inscricao.tiposanguineo = this.navParams.data.inscricao.tiposanguineo;
    this.inscricao.foto64 = this.navParams.data.inscricao.foto64;
    this.inscricao.peso = this.navParams.data.inscricao.peso;
    this.inscricao.altura = this.navParams.data.inscricao.altura;
    this.inscricao.rg_numero = this.navParams.data.inscricao.rg_numero;
    this.inscricao.cpf = this.navParams.data.inscricao.cpf;
    this.inscricao.ies = this.navParams.data.inscricao.ies;
    this.inscricao.nome_pai = this.navParams.data.inscricao.nome_pai;
    this.inscricao.nome_mae = this.navParams.data.inscricao.nome_mae;
    this.inscricao.nome_emergencia = this.navParams.data.inscricao.nome_emergencia;
    this.inscricao.telefone_emergencia = this.navParams.data.inscricao.telefone_emergencia;
    this.inscricao.nascimento = this.navParams.data.inscricao.nascimento;
  }

  ionViewDidLoad() {}
}
