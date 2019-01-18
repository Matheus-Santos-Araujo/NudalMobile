import { Login } from './../../modelos/login';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageloginProvider {

  constructor(private storage: Storage) { }
    
    pegaUsuario(){
      let user = this.storage.get("chave");
      return user;
    }

    public logar(login: Login){
        let key = "chave";
        return this.save(key, login);
      }
    

    deslogar(key: string){
      return this.storage.remove(key);
    }

    private save(key: string, login: Login) {
      return this.storage.set(key, login);
    }
}
