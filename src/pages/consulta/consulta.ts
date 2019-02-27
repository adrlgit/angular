import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {

  public filtro = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaPage');
  }
  paginaAndre(){
    this.navCtrl.push('EnderecoSemConteudoPage');
  }
  public Filtro(){
    this.filtro = true;
  }
  public close(){
    this.filtro = false;
  }
}
