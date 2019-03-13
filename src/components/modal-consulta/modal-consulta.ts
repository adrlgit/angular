import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello ModalConsultaComponent Component');
    this.text = 'Hello World';
  }

}
