import { MapaPage } from './../pages/mapa/mapa';
import { SobreempresaPage } from './../pages/sobreempresa/sobreempresa';
import { SobrenudalPage } from './../pages/sobrenudal/sobrenudal';
import { ContatoPage } from './../pages/contato/contato';
import { EscolhadancasPage } from './../pages/escolhadancas/escolhadancas';
import { EscolhalutasPage } from './../pages/escolhalutas/escolhalutas';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any, label: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage, icon:'home', label:'' },
      { title: 'Lutas', component: EscolhalutasPage, icon:'walk', label:'Modalidades' },
      { title: 'Danças', component: EscolhadancasPage, icon:'headset', label:'' },
      { title: 'Localização', component: MapaPage, icon:'map', label:'Informações' },
      { title: 'Contato', component: ContatoPage, icon:'mail', label:'' }, 
      { title: 'Sobre o Nudal', component: SobrenudalPage, icon:'information-circle', label:'Sobre' },
      { title: 'Sobre a Appice', component: SobreempresaPage, icon:'information-circle', label:'' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
