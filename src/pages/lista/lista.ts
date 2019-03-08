import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PaginaListadaPage } from "../pagina-listada/pagina-listada";

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lista",
  templateUrl: "lista.html"
})
export class ListaPage {
  public listas = [
    {
      nome: "Andre",
      sobrenome: "Luis"
    },
    {
      nome: "Renata",
      sobrenome: "Martins"
    },
    {
      nome: "Elisa",
      sobrenome: "Martins"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListaPage");
  }
  irPaginaListada(item) {
    this.navCtrl.push("PaginaListadaPage", { item });
  }
}
