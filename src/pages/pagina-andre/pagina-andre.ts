import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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
