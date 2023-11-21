import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenerdorJuegosComponent } from './contenerdor-juegos.component';

describe('ContenerdorJuegosComponent', () => {
  let component: ContenerdorJuegosComponent;
  let fixture: ComponentFixture<ContenerdorJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenerdorJuegosComponent]
    });
    fixture = TestBed.createComponent(ContenerdorJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
