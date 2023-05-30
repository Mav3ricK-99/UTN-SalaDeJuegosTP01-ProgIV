import { Carta } from "src/app/components/juegos/mayor-menor/carta/carta/carta.component";
import { Mazo } from "../mazo";
import { Jugador } from "./jugador";

export class Gamestate {
    jugadorActual: number;
    desechadas: Carta[];
    mazo: Mazo;
    jugadores: Jugador[];

    juegoTerminado: boolean;

    constructor(mazo: Mazo) {
        this.juegoTerminado = false;
        this.jugadorActual = 0;
        this.desechadas = [];
        this.mazo = mazo;
        this.jugadores = [new Jugador(), new Jugador()]; //La IA es 0
    }

    comenzarJuego() {
        //Se elige la primer carta dada vuelta
        this.desechadas.push(this.mazo.tomarCarta());

        //Jugadores eligen sus primeras cartas
        this.jugadores.forEach((jugador: Jugador) => {
            jugador.añadirCarta(this.mazo.tomarCarta());
            jugador.añadirCarta(this.mazo.tomarCarta());
            /*jugador.añadirCarta(this.mazo.tomarCarta()); */
        })
    }

    reiniciarJuego() {
        this.mazo.reponerCartas();
        this.jugadores = [new Jugador(), new Jugador()];
        this.juegoTerminado = false;
        this.jugadorActual = 0;
        this.desechadas = [];
        this.comenzarJuego();
    }

    jugadorTomaCarta(indiceJugador: number, carta: Carta) {
        this.jugadores[indiceJugador].añadirCarta(carta);
    }

    getUltimaCartaDesechada(): Carta {
        return this.desechadas[this.desechadas.length - 1];
    }

    agregarCartaDesechada(carta: Carta) {
        this.desechadas.push(carta);
    }

    jugadorJuegaUnaCarta(indiceJugador: number, carta: Carta) {
        this.agregarCartaDesechada(carta);
        this.jugadores[indiceJugador].quitarCarta(carta);
    }

    jugadorCantaUltimaCarta() {
        let jugadorSeleccionado = this.jugadores[this.jugadorActual];
        jugadorSeleccionado.cantarUltimaCarta();
    }

    condicionUltimaCarta(): boolean {
        let jugadorSeleccionado = this.jugadores[this.jugadorActual];
        if (!jugadorSeleccionado.cantoUltimaCarta && jugadorSeleccionado.mano.length < 2) {
            return false;
        }
        return true;
    }

    getSumaPuntosMano(indiceJugador: number): number {
        return this.jugadores[indiceJugador].sumaPuntosMano();
    }

    checkGanadores(): number {
        let idJugadorGanador: number = -1;

        this.jugadores.forEach((jugador, id) => {
            if (!jugador.mano.length) {
                idJugadorGanador = id;
                this.juegoTerminado = true;
            }
        }, [this]);

        return idJugadorGanador;
    }
}
