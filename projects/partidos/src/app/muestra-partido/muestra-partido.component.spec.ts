import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraPartidoComponent } from './muestra-partido.component';

describe('MuestraPartidoComponent', () => {
  let component: MuestraPartidoComponent;
  let fixture: ComponentFixture<MuestraPartidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuestraPartidoComponent]
    });
    fixture = TestBed.createComponent(MuestraPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
