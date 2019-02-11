import { NgModule } from '@angular/core';
import { DadosComponent } from './dados/dados';
import { PaginaLuisComponent } from './pagina-luis/pagina-luis';
import { ProtocoloComponent } from './protocolo/protocolo';
import { ApagarComponent } from './apagar/apagar';
import { TesteComponent } from './teste/teste';
@NgModule({
	declarations: [
		DadosComponent,
	PaginaLuisComponent,
    ProtocoloComponent,
    ApagarComponent,
    TesteComponent
],
	imports: [],
	exports: [DadosComponent,
    PaginaLuisComponent,
    ProtocoloComponent,
    ApagarComponent,
    TesteComponent]
})
export class ComponentsModule {}
