import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



// Nota: Aqui podemos crear las interfacez para definir de que tipo de valor tendras nuestros objetos

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})


//                    ********************* CAMBIOS REFACTORIZANDO CODIGO***************************


export class MainPageComponent {

  //                                       1º Forma de utilizar el servicio

  //personajes: Personaje[] = [];// Porpiedad personajes creada de nuevo,una vez hemos pasado estos datos al servicio para crearlo

  nuevo: Personaje = {// Personaje con valor por defecto
    nombre: 'Maestro roshi',
    poder: 0
  };

  //                                        2º Forma de utilizar el servicio(utilizando el get)

  // get personajes(): Personaje[] {// Utilizando un get para obtener la informacion que necesitamos del servicio

  //   return this.DbzService.personajes
  // }

  // Nota: Metodo para recibir el emit del componente hijo

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   // console.log('main page component');
  //   // console.log(argumento);
  //   //debugger; // Nota:la instriccion debugger nos brinda la misma funcionalidad que un breackpoint en el navegador,pues gracias a esta instruccion se  
  //   // nos crea uno sin necesidad de ponerlo en el navegador,teniendo en cuenta que hasta que no lo removamos del codigo seguira ejecuntandose.
  //   this.personajes.push(argumento)// utilizando el metodo push,para agregar el dato que nos viene del componente hijo

  // }


  // constructor(private DbzService: DbzService) {// De esta forma creamos un contructor e injectamos el servicio en el componente actual

  //   //                           1º Forma de utilizar el servicio

  //   //this.personajes = this.DbzService.personajes;// Con esta linea de codigo estamos diciendo a angular que cuando se crea el componente 
  //   // la propiedad personajes que hemos creado otra vez,tiene su valor en el servicio DbzService
  // }

  constructor() {

  }
}
