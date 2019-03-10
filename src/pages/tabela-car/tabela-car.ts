import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabelaCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabela-car',
  templateUrl: 'tabela-car.html',
})
export class TabelaCarPage {
  public qualquer;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.qualquer = navParams.get("variavel");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabelaCarPage');
  }

}
