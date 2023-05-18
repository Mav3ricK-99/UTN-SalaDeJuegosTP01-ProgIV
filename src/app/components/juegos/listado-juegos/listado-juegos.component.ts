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
    imagenPortada: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ACE_CAR.JPG/800px-ACE_CAR.JPG',
  },]
}
