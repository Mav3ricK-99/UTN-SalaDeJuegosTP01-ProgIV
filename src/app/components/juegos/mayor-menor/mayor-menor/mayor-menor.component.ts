import { Component } from '@angular/core';
import { Carta } from '../carta/carta/carta.component';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { Mazo } from 'src/app/classes/juegos/mazo';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.sass']
})
export class MayorMenorComponent {

  mazo: Mazo;
  carta: Carta;
  cartaAnterior: Carta;

  puntosTotales: number;
  seraMayor: boolean;
  elijioOpcion: boolean;
  primerCarta: boolean;

  resultado: boolean;

  constructor(public usuariosService: UsuarioService) {
    this.mazo = new Mazo();
    this.puntosTotales = 0;
    this.seraMayor = false;
    this.elijioOpcion = true;
    this.primerCarta = true;
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
    if (this.cartaAnterior.numero !== 0) {
      this.primerCarta = false;
    }
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
        this.puntosTotales += this.carta.numero;
      }
    } else {
      if (this.carta.numero < this.cartaAnterior.numero) {
        this.resultado = true;
        this.puntosTotales -= this.carta.numero;
      }
    }

    return this.resultado;
  }
}
