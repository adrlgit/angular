import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(
    public navCtrl: NavController
  ) {
    console.log('Hello PopoverComponent Component');
    this.text = 'Protocolos Anteriores';
  }
  openVersoesAnteriores(){
    this.navCtrl.push('EnderecoSemConteudoPage');
  }
}
