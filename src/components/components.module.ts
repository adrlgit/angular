import { NgModule } from '@angular/core';
import { DadosComponent } from './dados/dados';
import { ProtocoloComponent } from './protocolo/protocolo';
import { PopoverComponent } from './popover/popover';
import { ModalProtocoloComponent } from './modal-protocolo/modal-protocolo';


@NgModule({
    declarations: [
        DadosComponent,
        ProtocoloComponent,
        PopoverComponent,
        ModalProtocoloComponent
    ],
    entryComponents:[
        ModalProtocoloComponent
    ],
    imports: [],
    exports: [DadosComponent,
        ProtocoloComponent,
        PopoverComponent,
        ModalProtocoloComponent,
    ]
})
export class ComponentsModule { }
