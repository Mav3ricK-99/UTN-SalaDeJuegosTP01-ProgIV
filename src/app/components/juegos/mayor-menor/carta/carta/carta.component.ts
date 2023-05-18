import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.sass']
})
export class CartaComponent implements OnChanges {

  @Input('carta') carta: Carta;

  constructor() { }

  ngOnChanges(): void {
    this.getImagenDeCarta();
  }

  getImagenDeCarta() {
    this.carta.imagen = `assets/cartas-españolas/${this.carta.palo}${this.carta.numero}.png`;
  }
}

export interface Carta {
  numero: number,
  palo: string,
  imagen: string | undefined,
}

export let palos = ['oros', 'espadas', 'bastos', 'copas'];