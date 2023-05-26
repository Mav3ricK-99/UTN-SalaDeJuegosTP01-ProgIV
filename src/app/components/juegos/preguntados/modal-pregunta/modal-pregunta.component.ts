import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ImagenPregunta, Pregunta } from '../preguntados/preguntados.component';

@Component({
  selector: 'app-modal-pregunta',
  templateUrl: './modal-pregunta.component.html',
  styleUrls: ['./modal-pregunta.component.sass']
})
export class ModalPreguntaComponent implements OnChanges {

  @Input('pregunta') pregunta: Pregunta;
  @Output() eligioOpcion = new EventEmitter<Boolean>;
  opcionesPreguntaConImagenes: Array<ImagenPregunta>;
  esConImagen: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    this.mostrarModal();
    if (!(typeof this.pregunta.respuestaCorrecta == 'string')) {
      this.esConImagen = true;
      this.opcionesPreguntaConImagenes = this.pregunta.opciones as Array<ImagenPregunta>; //Imposible de hacer en la vista
      this.opcionesPreguntaConImagenes.splice((this.opcionesPreguntaConImagenes.length + 1) * Math.random() | 0, 0, this.pregunta.respuestaCorrecta)
    } else {
      this.pregunta.opciones.splice((this.pregunta.opciones.length + 1) * Math.random() | 0, 0, this.pregunta.respuestaCorrecta)
    }
  }

  elegirOpcion(op: String | ImagenPregunta, $event: any) {
    op == this.pregunta.respuestaCorrecta ? this.eligioOpcion.emit(true) : this.eligioOpcion.emit(false);

    ($event.target as HTMLElement).parentNode?.childNodes.forEach((cn: any) => {
      if (cn.textContent.trim() == this.pregunta.respuestaCorrecta) {
        cn.className += ' opcionCorrecta'
      } else {
        cn.className += ' opcionIncorrecta'
      }
    });
  }

  ocultarModal() {
    document.getElementById('modal-pregunta')?.classList.add('hidden')
  }

  mostrarModal() {
    document.getElementById('modal-pregunta')?.classList.remove('hidden')
  }
}
