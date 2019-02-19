import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ProtocoloComponent } from '../../components/protocolo/protocolo';

@NgModule({
  declarations: [
    HomePage,
    ProtocoloComponent,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),

  ],
})
export class HomeModule { }
