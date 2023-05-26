import { TestBed } from '@angular/core/testing';

import { PreguntadosService } from './preguntados.service';

describe('PreguntadosServiceService', () => {
  let service: PreguntadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
