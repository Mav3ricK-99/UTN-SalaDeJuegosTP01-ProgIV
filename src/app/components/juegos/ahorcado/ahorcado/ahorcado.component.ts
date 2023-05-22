import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Letra, LetraComponent } from '../letra/letra.component';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.sass']
})
export class AhorcadoComponent {

  @ViewChildren('letrasCmptes') letrasComponents: QueryList<LetraComponent>;

  letrasAhorcado: Letra[] = [
    { letra: "A" },
    { letra: 'B' },
    { letra: 'C' },
    { letra: 'D' },
    { letra: 'E' },
    { letra: 'F' },
    { letra: 'G' },
    { letra: 'H' },
    { letra: 'I' },
    { letra: 'J' },
    { letra: 'K' },
    { letra: 'L' },
    { letra: 'M' },
    { letra: 'N' },
    { letra: 'Ñ' },
    { letra: 'O' },
    { letra: 'P' },
    { letra: 'Q' },
    { letra: 'R' },
    { letra: 'S' },
    { letra: 'T' },
    { letra: 'U' },
    { letra: 'V' },
    { letra: 'W' },
    { letra: 'X' },
    { letra: 'Y' },
    { letra: 'Z' },
  ];

  palabrasJuego: string[] = [
    'angular',
    'juego',
    'web',
    'programacion',
    'teclado',
    'mouse',
  ];

  palabraSeleccionada: string;
  palabraSeleccionadaPresentada: string;
  palabraAnterior: string;

  letrasAdivinadas: Letra[] = [];

  intentosFallidos: number;
  sourceImgAhorcado: string;

  constructor(public usuariosService: UsuarioService, private router: Router) {
    this.initJuego();
  }

  initJuego() {
    if (this.palabraSeleccionada != '') {
      this.palabraAnterior = this.palabraSeleccionada;
    }
    this.letrasAdivinadas = [];
    this.intentosFallidos = 0;
    this.sourceImgAhorcado = `assets/ahorcado/ahorcado0.png`;
    this.formarPalabra();

    let caracterAleatorio = Math.floor(Math.random() * (this.palabraSeleccionada.length));
    this.letrasAdivinadas.push({ letra: this.palabraSeleccionada[caracterAleatorio] });

    this.ocultarLetrasPalabra();
  }

  probarLetra(letra: Letra) {
    if (this.palabraSeleccionada.includes(letra.letra.toLowerCase())) {
      if (!this.letrasAdivinadas.includes(letra)) {
        this.letrasAdivinadas.push(letra);
        this.ocultarLetrasPalabra();
        if (!this.palabraSeleccionadaPresentada.includes('_')) {
          this.modalGanaste();
        }
      }
    } else {
      this.intentosFallidos++;
      if (this.intentosFallidos < 7) {
        this.sourceImgAhorcado = `assets/ahorcado/ahorcado${this.intentosFallidos}.png`;
      } else {
        this.modalPerdiste();
      }
    }
  }

  formarPalabra() {
    do {
      let idPalabraRandom = Math.floor(Math.random() * (this.palabrasJuego.length));
      this.palabraSeleccionada = this.palabrasJuego[idPalabraRandom];
    } while (this.palabraSeleccionada == this.palabraAnterior);
  }

  ocultarLetrasPalabra() {
    let regex = new RegExp(`\\D`, "g");
    if (this.letrasAdivinadas.length > 0) {
      var parLetraAdivinada = "";
      this.letrasAdivinadas.forEach((letra: Letra, i: number) => {
        parLetraAdivinada += `${letra.letra}${letra.letra.toLowerCase()}`
        if (this.letrasAdivinadas.length != (i + 1)) {
          parLetraAdivinada += ", ";
        }
      });
      regex = new RegExp(`[^${parLetraAdivinada}]`, "g");
    }

    this.palabraSeleccionadaPresentada = this.palabraSeleccionada.replaceAll(regex, '_');
  }

  habilitarTodasLasLetras() {
    this.letrasComponents.toArray().forEach((letraComponent => {
      letraComponent.habilitarBoton();
    }));
  }

  modalGanaste() {
    Swal.fire({
      title: 'Bien!, Ganaste!',
      text: 'Ganaste 3 puntos',
      showDenyButton: true,
      confirmButtonText: 'Volver a jugar',
      denyButtonText: 'Ir al inicio'
    }).then((result) => {
      if (result.isConfirmed) {
        this.initJuego();
        this.habilitarTodasLasLetras();
      } else if (result.isDenied) {
        this.router.navigateByUrl('/');
      } else if (result.isDismissed) {
        this.initJuego();
        this.habilitarTodasLasLetras();
      }
    })
  }

  modalPerdiste() {
    Swal.fire({
      title: 'La proxima sera!',
      icon: 'error',
      text: 'Pierdes 3 puntos',
      showDenyButton: true,
      confirmButtonText: 'Volver a jugar',
      denyButtonText: 'Ir al inicio'
    }).then((result) => {
      if (result.isConfirmed) {
        this.initJuego();
        this.habilitarTodasLasLetras();
      } else if (result.isDenied) {
        this.router.navigateByUrl('/');
      } else if (result.isDismissed) {
        this.initJuego();
        this.habilitarTodasLasLetras();
      }
    })
  }
}
