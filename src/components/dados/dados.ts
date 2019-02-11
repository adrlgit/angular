import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the DadosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dados',
  templateUrl: 'dados.html'
})
export class DadosComponent {


  mostrarInformacao: boolean = true;

  public carros;

  constructor(public navCtrl: NavController) {
    this.carros = [
      { nome: "Especialidade", registro: 123475 }
    ];
  }
  show() {
    this.mostrarInformacao = !this.mostrarInformacao;
  }
}
