import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formAnim: any;
  $input: any;
  $submit: any = $('#submit');
  focused: any = false;
  completado: any = false;

  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.formularioLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

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

  ingresar() {
    let email = this.formularioLogin.get('email')?.value;
    let password = this.formularioLogin.get('password')?.value;

    this.usuarioService.ingresarUsuario(email, password).then((resultado) => {
      if (resultado.errorCode != 0) {
        this.formularioLogin.controls['password'].setErrors({
          'invalid': true
        })
      } else {
        this.router.navigate(['/']);
      }
    });

  }

}
