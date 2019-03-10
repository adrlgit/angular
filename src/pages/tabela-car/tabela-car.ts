import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Footer } from 'ionic-angular';

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
  cursos: string[] = ["Roda","Peneu","Carpete"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.qualquer = navParams.get("variavel");
  }
    ngOnInit(){
      for (let i=0; i < this.cursos.length; i++){
        let curso = this.cursos;
      }
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabelaCarPage');
  }

}
