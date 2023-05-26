import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreguntaComponent } from './modal-pregunta.component';

describe('ModalPreguntaComponent', () => {
  let component: ModalPreguntaComponent;
  let fixture: ComponentFixture<ModalPreguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPreguntaComponent]
    });
    fixture = TestBed.createComponent(ModalPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
