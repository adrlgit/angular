import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PopoverController, AlertController } from 'ionic-angular';

@Component({
  selector: 'protocolo',
  templateUrl: 'protocolo.html'
})
export class ProtocoloComponent {

  formGroup: FormGroup;

  cursos: string[] = [];
 
  mostrarCursos: boolean = false;
  validacao: boolean = false;
  aguarda: boolean = false;
  publica: boolean = false;
  cancela: boolean = false;
  exclui: boolean = false;
  meuFavorito: boolean = false;

  //utilizando ng class com cores do css 
  public aguardando = "cor1";
  public aprovado = "cor2";
  public concluido = "cor3";

  constructor(
    public formBuilder: FormBuilder,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController
    ) {

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(100),Validators.minLength(10)]]
    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
      ev: myEvent
    });
  }
  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Após validar o documento, não será possível a edição. Deseja confirmar a ação?',
      buttons: [
        {
          text: "SIM",
          handler: () => {
            const alert = this.alertCtrl.create({
              title: 'Atenção',
              subTitle: 'Este documento será devolvido para os devidos ajustes. Confirmar a ação?',
              buttons: [
                {
                  text: "SIM",
                  handler: () => {

                  }
                },
                {
                  text: "NÃO",
                  handler: () => {

                  }
                }
              ],
            });
            alert.present();
          }
        },
        {
          text: "NÃO",
          handler: () => {

          }
        }
      ],
    });
    alert.present();
  }
  
  ngOnInit() {
  }

  onSubmit() {
    this.validacao = !this.validacao;
  }

  start() {
    this.mostrarCursos = !this.mostrarCursos;
  }
  logar() {
    this.validacao = !this.validacao;
  }

  excluir() {
    this.exclui = !this.exclui;
  }

  onclick(){
    this.meuFavorito = !this.meuFavorito;
  }
}
