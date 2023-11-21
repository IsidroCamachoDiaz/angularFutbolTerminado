import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorAlquileresComponent } from './editor-alquileres.component';

describe('EditorAlquileresComponent', () => {
  let component: EditorAlquileresComponent;
  let fixture: ComponentFixture<EditorAlquileresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorAlquileresComponent]
    });
    fixture = TestBed.createComponent(EditorAlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
