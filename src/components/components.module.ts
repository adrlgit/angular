import { NgModule } from '@angular/core';
import { DadosComponent } from './dados/dados';
import { ProtocoloComponent } from './protocolo/protocolo';


@NgModule({
	declarations: [
		DadosComponent,
    ProtocoloComponent
],
	imports: [],
	exports: [DadosComponent,
        ProtocoloComponent,
    ]
})
export class ComponentsModule {}
