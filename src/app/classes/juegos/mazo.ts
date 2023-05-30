import { palos } from "src/app/components/juegos/mayor-menor/carta/carta/carta.component";
import { Carta } from "src/app/components/juegos/mayor-menor/carta/carta/carta.component";

export class Mazo {
    public cartas: Array<Carta>;

    constructor() {
        this.cartas = [];
        this.reponerCartas();
    }

    tomarCarta(): Carta {
        let idCartaAleatoria = Math.floor(Math.random() * (this.cartas.length));
        let cartaElejida = this.cartas[idCartaAleatoria];
        this.cartas = this.cartas.filter(function (carta) {
            return carta !== cartaElejida;
        })
        return cartaElejida;
    }

    reponerCartas() {
        palos.forEach((palo, i) => {
            let j = 1;
            do {
                let nuevaCarta: Carta = {
                    numero: j,
                    palo: palo,
                    imagen: `assets/cartas-españolas/${palo}${j}.png`,
                }
                this.cartas.push(nuevaCarta);
                j++;
            } while (j <= 12)
        })
    }
}
