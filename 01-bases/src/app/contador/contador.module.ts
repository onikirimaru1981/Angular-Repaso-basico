
import { NgModule } from "@angular/core";
import { ContadorComponent } from '../contador/contador/contador.component';



@NgModule({

    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]

})


export class ContadorModule { }