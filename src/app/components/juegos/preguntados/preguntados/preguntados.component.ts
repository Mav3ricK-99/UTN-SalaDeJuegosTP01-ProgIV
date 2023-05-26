import { Component } from '@angular/core';
import { PreguntadosService } from 'src/app/services/Preguntados/preguntados.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.sass']
})
export class PreguntadosComponent {

  mostrarRueda: boolean;
  constructor(private preguntdosService: PreguntadosService) {
    this.mostrarRueda = true;
    let a = preguntdosService.getSetPreguntasConImagenes(10, 'music', 'easy', 'AR');
    console.log(a.forEach(e => console.log(e)));
  }

  quitarRueda($event: any) {
    console.log("XD");
    this.mostrarRueda = false;
  }
}

export enum Categoria {
  music = "Musica",
  sport_and_leisure = "Deportes",
  film_and_tv = "Cine y TV",
  arts_and_literature = "Arte y literatura",
  history = "Historia",
  society_and_culture = "Sociedad y cultura",
  science = "Ciencia",
  geography = "Geografia",
  food_and_drink = "Comidas y bebidas",
  general_knowledge = "Conocimiento general",
}
