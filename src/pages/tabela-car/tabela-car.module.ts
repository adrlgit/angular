import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabelaCarPage } from './tabela-car';

@NgModule({
  declarations: [
    TabelaCarPage,
  ],
  imports: [
    IonicPageModule.forChild(TabelaCarPage),
  ],
})
export class TabelaCarPageModule {}
