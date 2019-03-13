import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCheckPage } from './modal-check';

@NgModule({
  declarations: [
    ModalCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCheckPage),
  ],
})
export class ModalCheckPageModule {}
