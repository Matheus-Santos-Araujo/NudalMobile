import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalidadePage } from './modalidade';

@NgModule({
  declarations: [
    ModalidadePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalidadePage),
  ],
})
export class ModalidadePageModule {}
