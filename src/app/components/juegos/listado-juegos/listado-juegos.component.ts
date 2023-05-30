import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.sass']
})
export class ListadoJuegosComponent {

  juegos: any = [{
    nombre: 'Mayor - Menor',
    ruta: '/mayor-menor',
    imagenPortada: './assets/cartasPoker.png',
  }, {
    nombre: 'El Ahorcado',
    ruta: '/ahorcado',
    imagenPortada: './assets/ahorcado.png',
  },
  {
    nombre: 'Preguntados (Ingles)',
    ruta: '/preguntados',
    imagenPortada: './assets/ahorcado.png',
  },
  {
    nombre: 'Jodete (El UNO)',
    ruta: '/jodete',
    imagenPortada: './assets/jodete-naipes.jpg',
  }]
}
