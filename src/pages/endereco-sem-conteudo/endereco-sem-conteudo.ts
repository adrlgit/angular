import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalNotificaComponent } from '../../components/modal-notifica/modal-notifica';

@IonicPage()
@Component({
  selector: 'page-endereco-sem-conteudo',
  templateUrl: 'endereco-sem-conteudo.html',
})
export class EnderecoSemConteudoPage {

  prioridade: boolean = false;
  prioridade2: boolean = false;
  filtro: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
  }
  public filtroShow(){
    this.filtro = !this.filtro;
  }

  public show(){
    this.prioridade = !this.prioridade;
  }
  public show2(){
    this.prioridade2 = !this.prioridade2;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecoSemConteudoPage');
  }
  notifica(){
    const modal = this.modalCtrl.create(ModalNotificaComponent);
    modal.present();
  }
  
}
