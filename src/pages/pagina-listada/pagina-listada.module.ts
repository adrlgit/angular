import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaListadaPage } from './pagina-listada';

@NgModule({
  declarations: [
    PaginaListadaPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaListadaPage),
  ],
})
export class PaginaListadaPageModule {}
