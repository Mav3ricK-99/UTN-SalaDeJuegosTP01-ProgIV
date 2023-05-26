import { Component } from '@angular/core';
import { PreguntadosService } from 'src/app/services/Preguntados/preguntados.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.sass']
})
export class PreguntadosComponent {

  mostrarRueda: boolean;
  mostrarPreguntas: boolean;

  preguntas: Array<Pregunta> = new Array<Pregunta>();

  constructor(private preguntadosService: PreguntadosService) {
    this.mostrarRueda = true;
    this.mostrarPreguntas = false;
  }

  quitarRueda($event: any) {
    this.prepararPreguntas($event);
  }

  public asignarPreguntas(resultado: any) {
    resultado.map((p: any) => {
      let iCategoriaElegida = Object.keys(Categoria).indexOf(p.category);

      let respuestaCorrecta: ImagenPregunta | string;
      let opciones: Array<string | ImagenPregunta> = new Array<string | ImagenPregunta>();

      if (p.correctAnswer instanceof Array) {
        respuestaCorrecta = {
          url: p.correctAnswer[0].url,
          descripcion: p.correctAnswer[0].description
        }
      } else {
        respuestaCorrecta = p.correctAnswer;
      }

      p.incorrectAnswers.forEach((ia: any) => {
        if (ia instanceof Array) {
          let respuestaIncorrectaImagen: ImagenPregunta;
          respuestaIncorrectaImagen = {
            url: ia[0].url,
            descripcion: ia[0].descripcion,
          }
          opciones.push(respuestaIncorrectaImagen);
        } else {
          opciones.push(ia);
        }
      });

      let nuevaPregunta: Pregunta = {
        pregunta: p.question.text,
        respuestaCorrecta: respuestaCorrecta,
        opciones: opciones,
        categoria: Object.values(Categoria)[iCategoriaElegida],
      };
      this.preguntas.push(nuevaPregunta);
    });

    this.mostrarRueda = false;
    this.mostrarPreguntas = true;
  }

  prepararPreguntas(categoria: string) {
    let pObservable = this.preguntadosService.getSetPreguntasConImagenes(5, categoria, 'easy,medium');
    pObservable.subscribe(res => this.asignarPreguntas(res));
  }

  reiniciarJuego() {
    this.preguntas = new Array<Pregunta>()
    this.mostrarRuleta();
  }

  mostrarRuleta() {
    this.mostrarRueda = true;
    this.mostrarPreguntas = false;
  }
}

export interface Pregunta {
  pregunta: string,
  respuestaCorrecta: string | ImagenPregunta,
  opciones: Array<string | ImagenPregunta>
  categoria: Categoria,
}

export interface ImagenPregunta {
  url: string,
  descripcion: string
}

export enum Categoria {
  music = "Musica",
  sport_and_leisure = "Deportes",
  film_and_tv = "Cine y TV",
  arts_and_literature = "Arte y Literatura",
  history = "Historia",
  society_and_culture = "Sociedad y Cultura",
  science = "Ciencia",
  geography = "Geografia",
  food_and_drink = "Comidas y Bebidas",
  general_knowledge = "Conocimiento General",
}