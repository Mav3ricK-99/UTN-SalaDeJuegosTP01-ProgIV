import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { contrasenasDebenCoincidirValidator } from 'src/app/directives/contrasenas-deben-coincidir.directive';
import { Usuario } from 'src/app/classes/usuario';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  formAnim: any;
  $input: any;
  $submit: any = $('#submit');
  focused: any = false;
  completado: any = false;

  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.formularioRegistro = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      nombreUsuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repetirPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    this.formularioRegistro.addValidators(contrasenasDebenCoincidirValidator());

  }

  ngOnInit(): void {
    this.$input = $('#email, #password');
    this.$submit = $('#submit');
    var formAnim = {
      $form: $('#form'),
      animClasses: ['face-up-left', 'face-up-right', 'face-down-left', 'face-down-right', 'form-complete', 'form-error'],
      resetClasses: function () {
        var $form = this.$form;

        $.each(this.animClasses, function (k, c) {
          $form.removeClass(c);
        });
      },
      faceDirection: function (d: any) {
        this.resetClasses();

        d = parseInt(d) < this.animClasses.length ? d : -1;

        if (d >= 0) {
          this.$form.addClass(this.animClasses[d]);
        }
      }
    }
    this.$input.focus(() => {
      this.focused = true;

      if (this.completado) {
        formAnim.faceDirection(1);
      } else {
        formAnim.faceDirection(0);
      }
    });

    this.$input.blur(function () {
      formAnim.resetClasses();
    });

    this.$input.on('input paste keyup', () => {
      this.completado = true;

      this.$input.each(function (this: any) {
        /* if (this.value == '') {
          this.completado = false;
        } */
      });

      if (this.completado) {
        formAnim.faceDirection(1);
      } else {
        formAnim.faceDirection(0);
      }
    });

    setTimeout(() => {
      if (!this.focused) {
        this.$input.eq(0).focus();
      }
    }, 2000);
  }

  registrarse() {
    let email = this.formularioRegistro.get('email')?.value;
    let nombreUsuario = this.formularioRegistro.get('nombreUsuario')?.value;
    let password = this.formularioRegistro.get('password')?.value;

    let nuevoUsuario = new Usuario();
    nuevoUsuario.setEmail(email);
    nuevoUsuario.setNombreUsuario(nombreUsuario);

    this.usuarioService.registrarUsuario(nuevoUsuario, password).then(res => {
      if (res instanceof Usuario) {
        this.router.navigate(['/']);
      } else {
        this.formularioRegistro.controls['email'].setErrors({
          'invalid': true
        })
      }
    })
  }

}