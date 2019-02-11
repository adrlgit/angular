import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaAndrePage } from './pagina-andre';
import { DadosComponent } from '../../components/dados/dados';


@NgModule({
  declarations: [
    PaginaAndrePage,
    DadosComponent
    // ProtocoloComponent
  ],
  imports: [
    IonicPageModule.forChild(PaginaAndrePage),
  ],
})
export class PaginaAndrePageModule {}
