import { Inscricao } from './../../modelos/inscricao';
import { ServidorservletProvider } from './../../providers/servidorservlet/servidorservlet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  model: Inscricao;
  idmodalidade: any;
  fotomodal: any;
  base64image: any;
  loadForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servidor: ServidorservletProvider, private toast: ToastController, private camera: Camera, public formBuilder: FormBuilder) {
    if (this.navParams.data.id) {
      this.idmodalidade = this.navParams.data.id;
      this.fotomodal = this.navParams.data.foto64;
    }
   
    this.model = new Inscricao();
    this.model.id = "0";
    this.model.modalidade  = this.idmodalidade;
    this.model.nome  = '';
    this.model.telfixo = '';
    this.model.telcelular = '';
    this.model.email = '';
    this.model.endereco_rua = '';
    this.model.endereco_numero = '';
    this.model.tiposanguineo = '';
    this.model.observacoes = '';
    this.model.atividade = '';
    this.model.foto64 = '';
    this.model.sexo = '';
    this.model.peso = '';
    this.model.altura = '';
    this.model.rg_numero = '';
    this.model.rg_expedicao = '';
    this.model.rg_expedidor = '';
    this.model.cpf = '';
    this.model.nome_pai = '';
    this.model.nome_mae = '';
    this.model.ies = '';
    this.model.nome_emergencia = '';
    this.model.telefone_emergencia = '';
    this.model.nascimento = '';

    this.formBuilder = formBuilder;

    this.loadForm = this.formBuilder.group({
     'nome' : ['', Validators.required],
     'telcelular' : ['', Validators.required],
     'email' : ['', Validators.required],
     'endereco_rua' : ['', Validators.required],
     'endereco_numero' : ['', Validators.required],
     'tiposanguineo' : ['', Validators.required],
     'peso' : ['', Validators.required],
     'altura' : ['', Validators.required],
     'rg_numero' : ['', Validators.required],
     'rg_expedicao' : ['', Validators.required],
     'rg_expedidor' : ['', Validators.required],
     'cpf' : ['', Validators.required],
     'nome_pai' : ['', Validators.required],
     'nome_mae' : ['', Validators.required],
     'ies' : ['', Validators.required],
     'nome_emergencia' : ['', Validators.required],
     'telefone_emergencia' : ['', Validators.required],
     'nascimento' : ['', Validators.required]
    });
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
      this.base64image = 'data:image/jpeg;base64,' + imageData;
      this.model.foto64 = imageData;
    }, (error) => {
      console.error(error);
    })
    .catch((error) => {
      console.error(error);
    })
}

  cadastro() {
    this.servidor.inserirInscricao(this.model)
      .then((result: any) => {
        this.navCtrl.pop();
        this.toast.create({ message: 'Cadastro realizado com sucesso. Resultado: ' + result.detalhe, position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao cadastrar. Erro: ' + error.detalhe, position: 'botton', duration: 3000 }).present();
      });
  }
}


