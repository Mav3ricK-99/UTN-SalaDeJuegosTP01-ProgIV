import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carta } from '../../mayor-menor/carta/carta/carta.component';

@Component({
  selector: 'app-mano',
  templateUrl: './mano.component.html',
  styleUrls: ['./mano.component.sass']
})
export class ManoComponent {

  @Input('mostrarMano') mostrarMano: boolean;
  @Input('mano') mano: Carta[];
  @Input('puedeElegirCarta') puedeElegirCarta: boolean;

  @Output() eligioCarta = new EventEmitter<Carta>();

  eligioCartaDeLaMano($event: Carta) {
    if (this.puedeElegirCarta) {
      this.eligioCarta.emit($event);
    }
  }
}
