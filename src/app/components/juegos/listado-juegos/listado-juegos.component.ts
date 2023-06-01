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
    imagenPortada: './assets/ahorcado.jpg',
  },
  {
    nombre: 'Preguntados',
    ruta: '/preguntados',
    imagenPortada: './assets/preguntados.avif',
  },
  {
    nombre: 'Jodete (El UNO)',
    ruta: '/jodete',
    imagenPortada: './assets/jodete.jpeg',
  }]
}
