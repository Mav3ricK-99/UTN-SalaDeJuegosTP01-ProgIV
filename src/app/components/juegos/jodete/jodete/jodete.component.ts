import { Component, OnInit } from '@angular/core';
import { JodeteIA } from 'src/app/classes/juegos/jodeteIA/jodete-ia';
import { Mazo } from 'src/app/classes/juegos/mazo';
import { Carta } from '../../mayor-menor/carta/carta/carta.component';
import { Gamestate } from 'src/app/classes/juegos/jodete/gamestate';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jodete',
  templateUrl: './jodete.component.html',
  styleUrls: ['./jodete.component.sass']
})
export class JodeteComponent implements OnInit {

  private mazo: Mazo;
  public gameState: Gamestate;
  public jodeteIA: JodeteIA;

  public esTurnoDelJugador: boolean;
  public eligioCartaDelMazo: boolean;
  public jugadorJugoUnaCarta: boolean;

  constructor(private router: Router) {
    this.mazo = new Mazo();
    this.jodeteIA = new JodeteIA();
  }

  ngOnInit(): void {
    this.gameState = new Gamestate(this.mazo);
    this.esTurnoDelJugador = false;
    this.eligioCartaDelMazo = false;
    this.jugadorJugoUnaCarta = false;
    this.gameState.comenzarJuego();
    this.iaJuegaUnaCarta();
  }

  iaJuegaUnaCarta() {
    if (this.gameState.juegoTerminado) return;
    let cartaElegidaPorLaIA = this.jodeteIA.getBestMove(this.gameState, 0);
    this.gameState.jugadorJuegaUnaCarta(0, cartaElegidaPorLaIA);
    this.gameState.jugadorActual = 0;

    this.verificarGanador();

    this.esTurnoDelJugador = true;
    this.gameState.jugadorActual = 1;
  }

  cartaElegidaDelMazo($event: Carta) {
    this.gameState.jugadorTomaCarta(1, $event);
    this.eligioCartaDelMazo = true;
  }

  jugadorEligeCartaSuMano($event: Carta) {
    if ($event.numero == this.gameState.getUltimaCartaDesechada().numero || $event.palo == this.gameState.getUltimaCartaDesechada().palo && this.gameState.condicionUltimaCarta()) {
      this.gameState.jugadorJuegaUnaCarta(1, $event);
      this.esTurnoDelJugador = false;
      this.eligioCartaDelMazo = false;
      this.jugadorJugoUnaCarta = false;

      this.verificarGanador();

      setTimeout(() => {
        this.iaJuegaUnaCarta();
      }, 1000, [this]);
    } else if ($event.numero == this.gameState.getUltimaCartaDesechada().numero || $event.palo == this.gameState.getUltimaCartaDesechada().palo && !this.gameState.condicionUltimaCarta()) {
      Swal.fire({
        title: 'Turno salteado!',
        icon: 'error',
        text: 'Tenes que cantar la ultima carta una ronda anterior!',
        confirmButtonText: 'OK!',
      }).then(() => {
        setTimeout(() => {
          this.iaJuegaUnaCarta();
        }, 1000, [this]);
      })
    }

  }

  cantarUltimaCarta() {
    this.gameState.jugadorCantaUltimaCarta();
  }

  pasarTurno() {
    if (this.esTurnoDelJugador && this.eligioCartaDelMazo) {
      this.esTurnoDelJugador = false;
      this.eligioCartaDelMazo = false;
      this.jugadorJugoUnaCarta = false;

      setTimeout(() => {
        this.iaJuegaUnaCarta();
      }, 1000, [this]);
    }
  }

  verificarGanador() {
    let idGanador = this.gameState.checkGanadores();
    let idPerdedor = idGanador == 1 ? 0 : 1;
    if (idGanador != -1) {
      let sumaPuntosManoPerdedor = this.gameState.getSumaPuntosMano(idPerdedor);
      switch (idGanador) {
        case 0: { this.mostrarModal('La proxima sera!', 'error', `Pierdes ${sumaPuntosManoPerdedor} puntos`); }; break;
        case 1: { this.mostrarModal('Bien!, Ganaste!', 'success', `Ganas ${sumaPuntosManoPerdedor} puntos`); }; break;

      }
    }
  }

  mostrarModal(titulo: string, icon: string, textoCuerpo: string) {
    if (icon != 'success' && icon != 'error') return;
    Swal.fire({
      title: titulo,
      icon: icon,
      text: textoCuerpo,
      showDenyButton: true,
      confirmButtonText: 'Volver a jugar',
      denyButtonText: 'Ir al inicio'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gameState.reiniciarJuego();
        this.iaJuegaUnaCarta();
      } else if (result.isDenied) {
        this.router.navigateByUrl('/');
      } else if (result.isDismissed) {
        this.gameState.reiniciarJuego();
        this.iaJuegaUnaCarta();
      }
    })
  }
}