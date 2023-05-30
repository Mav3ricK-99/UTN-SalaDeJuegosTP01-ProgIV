import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.sass']
})
export class CartaComponent implements OnChanges {

  @Input('carta') carta: Carta;
  @Input('mostrarCarta') mostrarCarta: boolean;
  @Input('width') width: number;

  @Output() eligioCarta = new EventEmitter<Carta>();

  constructor() { }

  ngOnChanges(): void {
    if (!this.mostrarCarta) {
      this.ocultarCarta();
    } else {
      this.carta.imagen = `assets/cartas-españolas/${this.carta.palo}${this.carta.numero}.png`;
    }
  }

  ocultarCarta() {
    this.carta.imagen = `assets/cartas-españolas/mazo.png`;
  }

  elegirCarta() {
    if (this.mostrarCarta) {
      this.eligioCarta.emit(this.carta);
    }
  }
}

export interface Carta {
  numero: number,
  palo: string,
  imagen: string | undefined,
}

export let palos = ['oros', 'espadas', 'bastos', 'copas'];