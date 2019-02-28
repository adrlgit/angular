import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParecerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parecer',
  templateUrl: 'parecer.html',
})
export class ParecerPage {
  public showOpcao:boolean = false;
  public opcaoSim:boolean = false;
  public opcaoNao:boolean = false;
  public btnAdd:boolean = false;
  public a:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParecerPage');
  }
  public exibeOpcao() {
    this.showOpcao = !this.showOpcao;
  }
  public exibeCheckSim() {
    this.opcaoSim = !this.opcaoSim;
    this.a = !this.a;
  }
  public exibeCheckNao() {
    this.opcaoNao = !this.opcaoNao;
  }
}
