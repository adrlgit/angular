import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalConsultaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-consulta',
  templateUrl: 'modal-consulta.html'
})
export class ModalConsultaComponent {

  text: string;

  constructor(
    public viewCtrl: ViewController,
  ) {
    console.log('Hello ModalConsultaComponent Component');
    this.text = 'Hello World';
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
