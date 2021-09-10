import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";// Libreria para Importacion de modulos
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({// Decorador para modulos
    declarations: [// Los componentes que hay dentro del modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [// Exportacion de lo que deseo hacer visible fuera del modulo
        ListadoComponent,
        HeroeComponent
    ],
    imports: [// Aqui estaran los modulos externos

        CommonModule // Este modulo es necesario importar,si se utilizara alguna directiva como ngIf,ngFor,etc
    ]

})
export class HeroesModule { }// exportacion del modulo