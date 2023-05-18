import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/Usuario/usuario.service';
import { inject } from '@angular/core';

export const loggedUsersOnlyGuard: CanActivateFn = (route, state) => {
  return !inject(UsuarioService).hayUsuarioIngresado() ? inject(Router).parseUrl('/login') : true;
};
