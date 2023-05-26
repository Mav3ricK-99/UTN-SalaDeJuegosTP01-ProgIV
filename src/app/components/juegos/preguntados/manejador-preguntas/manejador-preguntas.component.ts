import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Pregunta } from '../preguntados/preguntados.component';
import { ModalPreguntaComponent } from '../modal-pregunta/modal-pregunta.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manejador-preguntas',
  templateUrl: './manejador-preguntas.component.html',
  styleUrls: ['./manejador-preguntas.component.sass']
})
export class ManejadorPreguntasComponent implements OnInit {

  @ViewChild('modalPregunta') modalPregunta: ModalPreguntaComponent;
  @Input('preguntas') preguntas: Array<Pregunta>;
  @Output() jugarDenuevo = new EventEmitter<Boolean>();
  preguntaActual: Pregunta;

  iPreguntaActual: number;
  mostrarPreguntaActual: boolean;
  totalPuntos: number;

  constructor(private router: Router) {
    this.iPreguntaActual = -1;
    this.totalPuntos = 0;
  }

  ngOnInit(): void {
    this.siguientePregunta();
  }

  resultadoPregunta($event: any) {
    let respondioCorrectamente = $event;

    respondioCorrectamente ? this.totalPuntos++ : this.totalPuntos--;

    this.modalPregunta.ocultarModal();
    setTimeout(() => {
      this.mostrarPreguntaActual = false;
      this.modalContinuar(respondioCorrectamente);
    }, 2200);
  }

  siguientePregunta() {
    this.iPreguntaActual += 1;
    this.preguntaActual = this.preguntas[this.iPreguntaActual];
    this.mostrarPreguntaActual = true;
  }

  modalContinuar(resultado: boolean) {

    let mostrarFinalizar = false;
    if ((this.iPreguntaActual + 1) == this.preguntas.length) {
      mostrarFinalizar = true;
    }

    Swal.fire({
      title: resultado ? 'Correcto!' : 'Uppst!',
      text: resultado ? `Ganas 1 punto y en total llevas ${this.totalPuntos}` : 'Pierdes un punto!',
      showDenyButton: true,
      confirmButtonText: !mostrarFinalizar ? 'Seguiente pregunta!' : 'Terminar juego',
      denyButtonText: 'Ir al inicio'
    }).then((result) => {
      if (result.isConfirmed) {
        if (mostrarFinalizar) {
          this.modalFinalizar();
        } else {
          this.siguientePregunta();
        }
      } else {
        this.router.navigateByUrl('/');
      }
    })
  }

  modalFinalizar() {
    Swal.fire({
      title: 'Juego terminado!',
      text: `Te llevas a casa una cantidad de puntos de ${this.totalPuntos} !`,
      showDenyButton: true,
      confirmButtonText: 'Juegar denuevo',
      denyButtonText: 'Ir al inicio'
    }).then((result) => {
      if (result.isConfirmed) {
        this.jugarDenuevo.emit(true);
      } else {
        this.router.navigateByUrl('/');
      }
    })
  }
}
