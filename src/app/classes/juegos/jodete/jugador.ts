import { Carta } from "src/app/components/juegos/mayor-menor/carta/carta/carta.component";

export class Jugador {
    mano: Carta[];
    cantoUltimaCarta: boolean;

    constructor() {
        this.mano = [];
        this.cantoUltimaCarta = false;
    }

    añadirCarta(carta: Carta) {
        this.mano.push(carta);
        this.cantoUltimaCarta = false;
    }

    quitarCarta(cartaAQuitar: Carta) {
        this.mano = this.mano.filter((cartaMano: Carta) => {
            if (cartaMano !== cartaAQuitar) {
                return true;
            } else {
                return false;
            }
        });
    }

    sumaPuntosMano(): number {
        let sumaPuntosMano = 0;
        this.mano.forEach((carta: Carta) => {
            sumaPuntosMano += carta.numero;
        })

        return sumaPuntosMano;
    }

    cantarUltimaCarta() {
        this.cantoUltimaCarta = true;
    }

    juegaAnteultimaCarta() {
        return this.mano.length == 2;
    }
}
