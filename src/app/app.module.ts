import { DialogverinscricaoPage } from './../pages/dialogverinscricao/dialogverinscricao';
import { DialogeditarmodalidadePage } from './../pages/dialogeditarmodalidade/dialogeditarmodalidade';
import { DialogaddtopicosPage } from './../pages/dialogaddtopicos/dialogaddtopicos';
import { ModalidadePageModule } from './../pages/modalidade/modalidade.module';
import { EscolhadancasPageModule } from './../pages/escolhadancas/escolhadancas.module';
import { EscolhalutasPageModule } from './../pages/escolhalutas/escolhalutas.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component'; 
import { HomePage } from '../pages/home/home';
import { SobreempresaPage } from './../pages/sobreempresa/sobreempresa';
import { SobrenudalPage } from './../pages/sobrenudal/sobrenudal';
import { ContatoPage } from './../pages/contato/contato';
import { EscolhadancasPage } from './../pages/escolhadancas/escolhadancas';
import { EscolhalutasPage } from './../pages/escolhalutas/escolhalutas';
import { MapaPage } from './../pages/mapa/mapa'
import { Camera } from '@ionic-native/camera'

import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageloginProvider } from '../providers/storagelogin/storagelogin';
import { ServidorservletProvider } from '../providers/servidorservlet/servidorservlet';
import { EmailComposer } from '@ionic-native/email-composer';
import { Geolocation } from '@ionic-native/geolocation';
import { Validators } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobreempresaPage,
    SobrenudalPage,
    ContatoPage,
    MapaPage,
    DialogaddtopicosPage,
    DialogaddtopicosPage,
    DialogeditarmodalidadePage,
    DialogverinscricaoPage
    //EscolhadancasPage,
    //EscolhalutasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    EscolhalutasPageModule,
    EscolhadancasPageModule,
    ModalidadePageModule,
    IonicPageModule.forChild(HomePage), 
  ],
  exports: [
    HomePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobreempresaPage,
    SobrenudalPage,
    ContatoPage,
    EscolhadancasPage,
    EscolhalutasPage,
    MapaPage,
    DialogaddtopicosPage,
    DialogeditarmodalidadePage,
    DialogverinscricaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageloginProvider,
    ServidorservletProvider,
    Validators,
    Geolocation,
    EmailComposer,
    Camera
  ]
})
export class AppModule {}
