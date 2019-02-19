import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPaginaTestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-pagina-teste',
  templateUrl: 'modal-pagina-teste.html',
})
export class ModalPaginaTestePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPaginaTestePage');
  }

  close() {
    this.view.dismiss();
  }

}
