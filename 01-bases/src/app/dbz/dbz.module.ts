import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component'

import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent,
    AgregarComponent

  ],
  imports: [
    CommonModule,
    FormsModule// Modulos simples de Angular
  ],
  providers: [// En el apartado providers es donde iran alojados los servicios que necesitemos utilizar
    DbzService

  ]
})
export class DbzModule { }
