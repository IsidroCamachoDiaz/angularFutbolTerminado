import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorGeneralJuegosComponent } from './contenedor-general-juegos.component';

describe('ContenedorGeneralJuegosComponent', () => {
  let component: ContenedorGeneralJuegosComponent;
  let fixture: ComponentFixture<ContenedorGeneralJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorGeneralJuegosComponent]
    });
    fixture = TestBed.createComponent(ContenedorGeneralJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
