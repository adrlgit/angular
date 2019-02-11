import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaginaAndrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-andre',
  templateUrl: 'pagina-andre.html',
})
export class PaginaAndrePage {

  public dados;
 
  mostrarInformacao: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = [
      {nome: "Medico plus"}
    ];
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaAndrePage');
  }

  start(){
    this.mostrarInformacao = !this.mostrarInformacao;
  }
  show(){
    this.mostrarInformacao = !this.mostrarInformacao;
  }

}
