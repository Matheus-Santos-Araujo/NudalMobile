import { Inscricao } from './../../modelos/inscricao';
import { Topico } from './../../modelos/topico';
import { Modalidade } from './../../modelos/modalidade';
import { Login } from './../../modelos/login';
import { Http,  Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServidorservletProvider {

  private API_URL = 'https://app-nudal.herokuapp.com/requisicaoresposta' 

  constructor(public http: Http) { }

   //REQUISICOES-DE-LOGIN--------------------------------------------------------------------------
  public login(login: Login){
    let requisicao = "login";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: login.email,
        senha: login.senha,
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public alterarSenha(login: Login, novasenha: String){
    let requisicao = "alterar_senha";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: login.email,
        senha: login.senha,
        novasenha: novasenha,
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public recuperarSenha(email: String){
    let requisicao = "recuperar_senha";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: email,
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

   //REQUISICOES-DE-MODALIDADES--------------------------------------------------------------------
  public pegarModalidades(){
    let requisicao = "pegar_modalidades";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
      };

        let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',  
      });
       let options = new RequestOptions({
        headers: headers
      });

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta, options)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public alterarModalidade(login: Login, modalidade: Modalidade){
    let requisicao = "alterar_modalidade";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: login.email,
        senha: login.senha,
        modalidade: modalidade
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta,)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

 //REQUISIÇÕES-DE-TOPICOS----------------------------------------------------------------------
  public inserirTopico(login: Login, topico: Topico ){
    let requisicao = "inserir_topico";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: login.email,
        senha: login.senha,
        topico: topico
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public pegarTopicos(modalidade: Modalidade){
    let requisicao = "pegar_topico";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        modalidade: modalidade.id
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public alterarTopico(login: Login, topico: Topico){
    let requisicao = "alterar_topico";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: login.email,
        senha: login.senha,
        topico: topico
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public deletarTopico(login: Login, topico: Topico){
    let requisicao = "deletar_topico";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: login.email,
        senha: login.senha,
        topico: topico
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

   //REQUISIÇÕES-DE-INSCRICAO----------------------------------------------------------------------
  public inserirInscricao(inscricao: Inscricao){
    var requisicao = "inserir_inscricao";

    return new Promise((resolve, reject) => {
      
      var data = {
        requisicao: requisicao,
        inscricao: inscricao,
      };

      var resposta = JSON.stringify(data);
      
    console.log(resposta);
      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public pegarInscricoes(modalidade: Modalidade){
    let requisicao = "pegar_inscricoes";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        modalidade: modalidade.id
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  public deletarInscricao(login: Login, inscricao: Inscricao){
    let requisicao = "deletar_inscricao";

    return new Promise((resolve, reject) => {
      var data = {
        requisicao: requisicao,
        email: login.email,
        senha: login.senha,
        inscricao: inscricao
      };

      var resposta = JSON.stringify(data);

      this.http.post(this.API_URL, resposta)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });    
  }
}