import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../services/Usuario/usuario.service';
import { inject } from '@angular/core';

export const guestsOnlyGuard: CanActivateFn = (route, state) => {
  return !inject(UsuarioService).hayUsuarioIngresado();
};
