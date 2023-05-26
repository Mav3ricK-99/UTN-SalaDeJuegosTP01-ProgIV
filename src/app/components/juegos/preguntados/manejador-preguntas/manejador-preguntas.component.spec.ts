import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejadorPreguntasComponent } from './manejador-preguntas.component';

describe('ManejadorPreguntasComponent', () => {
  let component: ManejadorPreguntasComponent;
  let fixture: ComponentFixture<ManejadorPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManejadorPreguntasComponent]
    });
    fixture = TestBed.createComponent(ManejadorPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
