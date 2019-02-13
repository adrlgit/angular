import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    public viewCtrl: ViewController
    ) {
      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required, Validators.minLength(1)]]
      });
  }

  goToPage(){
    this.navCtrl.push('PaginaAndrePage');
  }
  open(){
    this.navCtrl.push('PaginaAndrePage');
  }
  paginaAndre(){
    this.navCtrl.push('EnderecoSemConteudoPage');
  }

}
