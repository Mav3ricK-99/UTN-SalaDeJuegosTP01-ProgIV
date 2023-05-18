import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carta, palos } from '../../carta/carta/carta.component';

@Component({
  selector: 'app-mazo',
  templateUrl: './mazo.component.html',
  styleUrls: ['./mazo.component.sass']
})
export class MazoComponent {

  @Output() pickeoCarta = new EventEmitter<Carta>();

  @Input('elijioOpcion') elijioOpcion: boolean;

  constructor() { }

  elejirCartaDelMazo() {
    if (this.elijioOpcion == true) {
      let numeroCarta = Math.floor(Math.random() * (10 - 1) + 1);
      let paloCarta = Math.floor(Math.random() * (3 - 0) + 0);

      let cartaElejida: Carta = {
        numero: numeroCarta,
        palo: palos[paloCarta],
        imagen: undefined,
      }
      this.pickeoCarta.emit(cartaElejida);
    }
  }
}
