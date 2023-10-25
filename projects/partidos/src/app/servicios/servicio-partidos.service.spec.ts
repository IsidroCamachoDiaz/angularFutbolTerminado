import { TestBed } from '@angular/core/testing';

import { ServicioPartidosService } from './servicio-partidos.service';

describe('ServicioPartidosService', () => {
  let service: ServicioPartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
