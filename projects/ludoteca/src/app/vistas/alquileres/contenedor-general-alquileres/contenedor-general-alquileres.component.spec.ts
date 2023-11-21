import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorGeneralAlquileresComponent } from './contenedor-general-alquileres.component';

describe('ContenedorGeneralAlquileresComponent', () => {
  let component: ContenedorGeneralAlquileresComponent;
  let fixture: ComponentFixture<ContenedorGeneralAlquileresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorGeneralAlquileresComponent]
    });
    fixture = TestBed.createComponent(ContenedorGeneralAlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
