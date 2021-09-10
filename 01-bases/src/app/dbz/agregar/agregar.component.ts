import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'

})
export class AgregarComponent {

  // @Input() personajes: Personaje[] = []

  @Input('nuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService) { }
  // Decorador output para emitir datos al componente padre,recordar poner el tipo de dato generico <dato-generico> ene ste caso seria un tipo personaje
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);

  // }

  // agregar(event: any) {
  // Esta sintaxis hace preveer el comportamiento por defecto de un formulario
  // event.preventDefault()

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {// Nota: con este codigo evitamos que se 
      //pueda validar el formulario si no hay nada escrito
      return;
    };
    // console.log(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo)// Emitiendo propiedad al padre

    // this.personajes.push(this.nuevo)// Codigo para introducir nuevo personaje en el areglo
    this.DbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {// Codigo para purgar formulario
      nombre: '',
      poder: 0
    }






  }


  // Nota: El método trim() devuelve la cadena de texto despojada de los
  // espacios en blanco en ambos extremos. El método no afecta al valor de la 
  // cadena de texto


}
