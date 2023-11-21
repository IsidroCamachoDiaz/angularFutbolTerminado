import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorGeneralUsuariosComponent } from './contenedor-general-usuarios.component';

describe('ContenedorGeneralUsuariosComponent', () => {
  let component: ContenedorGeneralUsuariosComponent;
  let fixture: ComponentFixture<ContenedorGeneralUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorGeneralUsuariosComponent]
    });
    fixture = TestBed.createComponent(ContenedorGeneralUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
