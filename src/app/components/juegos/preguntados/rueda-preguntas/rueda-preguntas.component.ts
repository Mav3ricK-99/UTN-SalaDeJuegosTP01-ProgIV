import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from '../preguntados/preguntados.component';

@Component({
  selector: 'app-rueda-preguntas',
  templateUrl: './rueda-preguntas.component.html',
  styleUrls: ['./rueda-preguntas.component.sass']
})

export class RuedaPreguntasComponent implements OnInit {

  sectors: Array<CategoriaRueda> = [
    { color: "#f82", nombre: Categoria.arts_and_literature },
    { color: "#0bf", nombre: Categoria.film_and_tv },
    { color: "#fb0", nombre: Categoria.food_and_drink },
    { color: "#0fb", nombre: Categoria.general_knowledge },
    { color: "#b0f", nombre: Categoria.history },
    { color: "#f0b", nombre: Categoria.music },
    { color: "#bf0", nombre: Categoria.sport_and_leisure },
  ];

  @Output() giroRuleta = new EventEmitter<Boolean>();

  tot: number;
  elSpin: any;
  ctx: CanvasRenderingContext2D;
  dia: number;
  rad: number;
  TAU: number;
  arc: number;
  friction: number;
  angVelMin: number;
  angVelMax: number;
  angVel: number;
  ang: number;
  isSpinning: boolean;
  isAccelerating: boolean;
  animFrame: number | undefined;
  sectorAnterior: CategoriaRueda | undefined;
  presionoGirar: boolean;
  terminoDeGirar: boolean;

  constructor() {
    this.terminoDeGirar = false;
    this.tot = this.sectors.length;

    this.TAU = 2 * Math.PI;
    this.arc = this.TAU / this.tot;

    this.friction = 0.991;  // 0.995=soft, 0.99=mid, 0.98=hard
    this.angVelMin = 0.002; // Below that number will be treated as a stop
    this.angVelMax = 0; // Random ang.vel. to accelerate to 
    this.angVel = 0;    // Current angular velocity
    this.ang = 0;       // Angle rotation in radians
    this.isSpinning = false;
    this.isAccelerating = false;
  }

  ngOnInit(): void {
    this.elSpin = document.querySelector("#spin");

    let wheelCanvasEl = <HTMLCanvasElement>document.querySelector("#wheel");
    let wheelCanvasElContext = wheelCanvasEl.getContext('2d');
    if (wheelCanvasEl && wheelCanvasElContext != undefined) {
      this.ctx = wheelCanvasElContext;
    }
    this.dia = this.ctx.canvas.width;
    this.rad = this.dia / 2;

    this.sectors.forEach((sector, i) => this.drawSector(sector, i));
    this.rotate();
  }

  girar() {
    if (this.isSpinning || (this.presionoGirar && !this.angVel)) return;

    this.presionoGirar = true;
    this.isSpinning = true;
    this.isAccelerating = true;
    this.angVelMax = this.rand(0.25, 0.50);
    this.engine();

  }

  rand(max: number, min: number) {
    return Math.random() * (max - min) + min;
  }

  getIndex() {
    return Math.floor(this.tot - this.ang / this.TAU * this.tot) % this.tot;
  }

  drawSector(sector: any, i: number) {
    this.ang = this.arc * i;
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.fillStyle = sector.color;
    this.ctx.moveTo(this.rad, this.rad);
    this.ctx.arc(this.rad, this.rad, this.rad, this.ang, this.ang + this.arc);
    this.ctx.lineTo(this.rad, this.rad);
    this.ctx.fill();
    // TEXT
    this.ctx.translate(this.rad, this.rad);
    this.ctx.rotate(this.ang + this.arc / 2);
    this.ctx.textAlign = "right";
    this.ctx.fillStyle = "#fff";
    this.ctx.font = "bold 30px sans-serif";
    this.ctx.fillText(sector.nombre, this.rad - 10, 10);
    //
    this.ctx.restore();
  };

  rotate() {
    let sector = this.sectors[this.getIndex()];
    this.ctx.canvas.style.transform = `rotate(${this.ang - Math.PI / 2}rad)`;

    if (this.sectorAnterior != undefined && sector.nombre != this.sectorAnterior.nombre) {
      const audio = new Audio('assets/preguntados/sfx/click.mp3')
      audio.volume = .65;
      audio.play();
    }
    this.sectorAnterior = sector;

    if (!this.angVel && !this.presionoGirar) {
      this.elSpin.textContent = "JUGAR";
    } else {
      this.elSpin.textContent = sector.nombre
    }
    this.elSpin.style.background = sector.color;

    if (this.presionoGirar && !this.angVel) {
      this.terminoDeGirar = true;
      setTimeout(() => {
        this.giroRuleta.emit(true);
      }, 3300, [this]);


    }
  };

  frame() {
    if (!this.isSpinning) return;

    if (this.angVel >= this.angVelMax) this.isAccelerating = false;

    // Accelerate
    if (this.isAccelerating) {
      this.angVel ||= this.angVelMin;
      this.angVel *= 1.06;
    }
    else {
      this.isAccelerating = false;
      this.angVel *= this.friction;

      if (this.angVel < this.angVelMin) {
        this.isSpinning = false;
        this.angVel = 0;
        if (this.animFrame != undefined) {
          cancelAnimationFrame(this.animFrame);
        }
      }
    }

    this.ang += this.angVel;
    this.ang %= this.TAU;
    this.rotate();
  };

  engine = () => {
    this.frame();
    this.animFrame = requestAnimationFrame(this.engine)
  };

}

interface CategoriaRueda {
  color: string,
  nombre: string
}
