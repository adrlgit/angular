import { Component } from '@angular/core';

/**
 * Generated class for the ModalNotificaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-notifica',
  templateUrl: 'modal-notifica.html'
})
export class ModalNotificaComponent {

  text: string;

  constructor() {
    console.log('Hello ModalNotificaComponent Component');
    this.text = 'Hello World';
  }

}
