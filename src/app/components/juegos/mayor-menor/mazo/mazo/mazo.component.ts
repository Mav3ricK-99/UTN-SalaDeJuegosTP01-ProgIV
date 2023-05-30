import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carta, palos } from '../../carta/carta/carta.component';
import { Mazo } from 'src/app/classes/juegos/mazo';

@Component({
  selector: 'app-mazo',
  templateUrl: './mazo.component.html',
  styleUrls: ['./mazo.component.sass']
})
export class MazoComponent {

  @Output() pickeoCarta = new EventEmitter<Carta>();

  @Input('habilitarMazo') habilitarMazo: boolean;

  @Input('mazo') mazo: Mazo;
  @Input('width') width: number;

  elejirCartaDelMazo() {
    if (this.habilitarMazo == true) {
      let cartaElejida: Carta = this.mazo.tomarCarta();

      this.pickeoCarta.emit(cartaElejida);
    }
  }
}
