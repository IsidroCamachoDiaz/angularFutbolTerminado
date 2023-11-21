import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenerdorUsuariosComponent } from './contenerdor-usuarios.component';

describe('ContenerdorUsuariosComponent', () => {
  let component: ContenerdorUsuariosComponent;
  let fixture: ComponentFixture<ContenerdorUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenerdorUsuariosComponent]
    });
    fixture = TestBed.createComponent(ContenerdorUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
