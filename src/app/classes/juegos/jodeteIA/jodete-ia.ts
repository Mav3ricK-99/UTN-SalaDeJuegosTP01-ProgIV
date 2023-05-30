import { Carta } from "src/app/components/juegos/mayor-menor/carta/carta/carta.component";
import { Gamestate } from "../jodete/gamestate";

export class JodeteIA {

    evaluateState(state: Gamestate, playerIndex: number): number {
        // Evaluación simple: la IA priorizará deshacerse de las cartas lo más rápido posible
        const playerHand = state.jugadores[playerIndex].mano;
        return playerHand.length;
    }

    generateValidMoves(state: Gamestate, playerIndex: number): Carta[] {
        const playerHand = state.jugadores[playerIndex].mano;
        const topCarta = state.desechadas[state.desechadas.length - 1];
        const validMoves: Carta[] = [];

        for (const card of playerHand) {
            if (card.palo === topCarta.palo || card.numero === topCarta.numero) {
                validMoves.push(card);
            }
        }

        if (validMoves.length === 0) {
            // Si no hay movimientos válidos, se debe robar una carta
            validMoves.push(this.drawCarta(state));
        }

        return validMoves;
    }

    simulateMove(state: Gamestate, move: Carta, playerIndex: number): Gamestate {
        const newState = new Gamestate(state.mazo);
        newState.jugadorActual = newState.jugadorActual;
        newState.desechadas = newState.desechadas;
        newState.jugadores = newState.jugadores;

        if (move.palo === "" && move.numero === 0) {
            // El jugador roba una carta
            const drawCarta = this.drawCarta(newState);
            newState.jugadores[playerIndex].mano.push(drawCarta);
        } else {
            // El jugador juega una carta
            const playerHand = newState.jugadores[playerIndex].mano;
            const cardIndex = playerHand.findIndex(
                (card) => card.palo === move.palo && card.numero === move.numero
            );

            if (cardIndex !== -1) {
                // La carta se encuentra en la mano del jugador
                const card = playerHand.splice(cardIndex, 1)[0];
                newState.desechadas.push(card);
            }
        }

        return newState;
    }

    drawCarta(state: Gamestate): Carta {
        let cartaTomadaDelMazo = state.mazo.tomarCarta();
        state.jugadores[0].añadirCarta(cartaTomadaDelMazo);

        return cartaTomadaDelMazo;
    }

    getBestMove(state: Gamestate, playerIndex: number): Carta {
        let bestEval = Number.NEGATIVE_INFINITY;
        let bestMove: Carta | undefined;

        const validMoves = this.generateValidMoves(state, playerIndex);
        for (const move of validMoves) {
            const newState = this.simulateMove(state, move, playerIndex);

            const evaluar = this.evaluateState(newState, playerIndex);
            if (evaluar > bestEval) {
                bestEval = evaluar;
                bestMove = move;
            }
        }

        return bestMove!;
    }
}