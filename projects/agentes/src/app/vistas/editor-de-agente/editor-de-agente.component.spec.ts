import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeAgenteComponent } from './editor-de-agente.component';

describe('EditorDeAgenteComponent', () => {
  let component: EditorDeAgenteComponent;
  let fixture: ComponentFixture<EditorDeAgenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorDeAgenteComponent]
    });
    fixture = TestBed.createComponent(EditorDeAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
