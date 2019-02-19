import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPaginaTestePage } from './modal-pagina-teste';

@NgModule({
  declarations: [
    ModalPaginaTestePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPaginaTestePage),
  ],
})
export class ModalPaginaTestePageModule {}
