import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function contrasenasDebenCoincidirValidator(): ValidatorFn {
  return (formulario: AbstractControl): ValidationErrors | null => {
    let controlPassword = formulario.get('password');
    let controlRepetir = formulario.get('repetirPassword');
    if (controlPassword != undefined && controlRepetir != undefined) {
      if (controlPassword.value !== controlRepetir.value) {
        return { noCoinciden: 'No coinciden' };
      }
    }
    return null;
  };
}