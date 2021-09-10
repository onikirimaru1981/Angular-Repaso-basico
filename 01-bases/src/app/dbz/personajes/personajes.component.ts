import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'

})
export class PersonajesComponent {

  get personajes() {// Para obtener los datos,creamos otro get,y utilizamos esta sintaxis
    return this.DbzService.personajes;
  }

  //@Input('data') personajes: Personaje[] = []// Nota: El decorador @input le dice a angular que este input(en este caso personajes)
  // viene del componente padre
  // Nota2: si a nivel externo deseamos cambiar el nombre del input,podemos poner el nombre entre comillas y este debe coincidir 
  // con el nombre en el componente padre
  // Nota3: Para definir el tipo de dato del input podemos obtenerlo exportando la interfaz


  constructor(private DbzService: DbzService) {


  }
}
