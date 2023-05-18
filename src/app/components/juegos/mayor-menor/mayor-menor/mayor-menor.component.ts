import { Component } from '@angular/core';
import { Carta } from '../carta/carta/carta.component';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.sass']
})
export class MayorMenorComponent {

  carta: Carta;
  cartaAnterior: Carta;
  seraMayor: boolean;
  elijioOpcion: boolean;

  resultado: boolean;

  constructor(public usuariosService: UsuarioService) {
    this.seraMayor = false;
    this.elijioOpcion = true;
    this.carta = {
      numero: 0,
      palo: '?',
      imagen: undefined,
    }
    this.cartaAnterior = {
      numero: 0,
      palo: '?',
      imagen: undefined,
    }
  }

  setUltimaCarta($event: Carta) {
    this.cartaAnterior = this.carta;
    this.carta = $event;
    this.resultadoJuego();
    this.elijioOpcion = false;
  }

  setOpcion($event: boolean) {
    this.seraMayor = $event;
    this.elijioOpcion = true;
  }

  resultadoJuego(): boolean {

    this.resultado = false;
    if (this.seraMayor) {
      if (this.carta.numero > this.cartaAnterior.numero) {
        this.resultado = true;
      }
    } else {
      if (this.carta.numero < this.cartaAnterior.numero) {
        this.resultado = true;
      }
    }

    return this.resultado;
  }
}
