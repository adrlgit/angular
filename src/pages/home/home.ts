import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController, PopoverController, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverComponent } from '../../components/popover/popover';
// import { ModalProtocoloComponent } from '../../components/modal-protocolo/modal-protocolo';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public popoverCtrl: PopoverController,
    public modalAndre: ModalController

  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  // Modal
  modal() {
    const modal = this.modalAndre.create('ModalPaginaTestePage');
    modal.present();
  }

  // para declarar a pagina popover devemos importar no ts  onde é criado o evento
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

  goToPage() {
    this.navCtrl.push('PaginaAndrePage');
  }
  open() {
    this.navCtrl.push('PaginaAndrePage');
  }
  paginaAndre() {
    this.navCtrl.push('EnderecoSemConteudoPage');
  }
  tamanhoFontes() {
    this.navCtrl.push('FontesTagsPage');
  }
  log(){
    this.navCtrl.push('LoginPage');
  }
  public irParecer(){
    this.navCtrl.push('ConsultaPage')
  }
  public novoParecer() {
    this.navCtrl.push("ParecerPage");
  }
  lista() {
    this.navCtrl.push('ListaPage');
  }
}
