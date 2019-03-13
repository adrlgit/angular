import { NgModule } from '@angular/core';
import { DadosComponent } from './dados/dados';
import { ProtocoloComponent } from './protocolo/protocolo';
import { PopoverComponent } from './popover/popover';

@NgModule({
    declarations: [
        DadosComponent,
        ProtocoloComponent,
        PopoverComponent
   
    ],
    entryComponents: [
    ],
    imports: [
    ],
    exports: [DadosComponent,
        ProtocoloComponent,
        PopoverComponent
    ]
})
export class ComponentsModule { }
