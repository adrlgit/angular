import { NgModule } from '@angular/core';
import { DadosComponent } from './dados/dados';
import { ProtocoloComponent } from './protocolo/protocolo';
import { PopoverComponent } from './popover/popover';
import { ModalProtocoloComponent } from './modal-protocolo/modal-protocolo';
import { ModalConsultaComponent } from './modal-consulta/modal-consulta';

@NgModule({
    declarations: [
        DadosComponent,
        ProtocoloComponent,
        PopoverComponent,
    ModalConsultaComponent
    ],
    entryComponents: [
    ],
    imports: [
    ],
    exports: [DadosComponent,
        ProtocoloComponent,
        PopoverComponent,
    ModalConsultaComponent
    ]
})
export class ComponentsModule { }
