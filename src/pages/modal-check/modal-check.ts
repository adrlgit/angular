import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalConsultaComponent } from '../../components/modal-consulta/modal-consulta';
import { FormGroup,  Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the ModalCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-check',
  templateUrl: 'modal-check.html',
})
export class ModalCheckPage {
  formGroup: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    ) {
      this.formGroup = this.formBuilder.group({
        nome: ['null', [Validators.required, Validators.maxLength(1),Validators.minLength(1)]]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCheckPage');
  }
  modalConsulta() {
    const modal = this.modalCtrl.create(ModalConsultaComponent);
    modal.present();
  }
}
