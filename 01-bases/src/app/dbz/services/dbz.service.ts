
//Nota: Creando la clase del servicio,como se aprecia en principio no hay diferencias con la clase de un componente,
// Pero el decorador de este servicio es diferente,seria @Injectable

// Nota2: Un servicio se podria decir que es una clase abstracta en la que ubicaremos la informacion y los metodos,
// para interactuar con fuentes externas o incluso manipular el estado de la informacion de la aplicacion

import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()// Lo que quiere decir este decorador es que dbzService es una clase que se va a poder injectar.

// Centrando informacion de personajes del origen:main-page.component.ts al servicio dbz.service.ts
export class DbzService {// Nombre del servicio con su export para poder utilizarlo fuera

    //                             Orden en el que van los elementos

    // 1º Propiedades
    // 2º Get y Set
    // 3º Contructor
    // 4º metodos


    //                    ********************* CAMBIOS REFACTORIZANDO CODIGO***************************
    // personajes: Personaje[] = [
    private _personajes: Personaje[] = [// De esta forma evitamos que la propiedad pueda ser manipulada, y utilizando _propiedad utilizamos
        // un standar para decir que esta sera privadamaunque lo que la convierte de esta manera es el private

        {
            nombre: 'Gokuh',
            poder: 20000
        },
        {
            nombre: 'Krilin',
            poder: 7000
        },
        {
            nombre: 'Vegeta',
            poder: 13500
        },
        {
            nombre: 'Gohan',
            poder: 16500
        },
        {
            nombre: 'Picolo',
            poder: 12700
        }
    ];

    // Creando get 
    get personajes(): Personaje[] {// Tener en cuenta que que aunque sea un get,Js lo manda todo por referencia,y puede ser un problema porque
        // podria manipularse este get, para evitarlo utilizaremos esta sintaxis: return [...this._personajes];

        // Nota: Las llaven indican que es un areglo,los tres puntos(operador spread) indica que  separe cada uno de los elementos independientes
        // que tiene el areglo,y crea uno nuevo
        return [...this._personajes];// esta sintaxis rompe la refencia de Js con los personajes de arriba
    };

    constructor() { };

    //                          Metodo para añadir personajes

    agregarPersonaje(personaje: Personaje) {

        this._personajes.push(personaje);// Metodo para añadir a nuestra propiedad privada declarada arriba el personaje que viene como argumento en el metodo


    };



};