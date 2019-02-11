import { NgModule } from '@angular/core';
import { DadosComponent } from './dados/dados';

import { ProtocoloComponent } from './protocolo/protocolo';

import { TesteComponent } from './teste/teste';
@NgModule({
	declarations: [
		DadosComponent,

    ProtocoloComponent,

    TesteComponent
],
	imports: [],
	exports: [DadosComponent,
    
    ProtocoloComponent,
  
    TesteComponent]
})
export class ComponentsModule {}
