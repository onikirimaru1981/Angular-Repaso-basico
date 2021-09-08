import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
  heroeBorrado: string = '';
  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Linterna verde', 'Batman'];

  borrarHeroe(): void {

    const heroeBorrado: string[] = this.heroes.splice(-1)

    this.heroeBorrado = heroeBorrado[0]


  }

}
