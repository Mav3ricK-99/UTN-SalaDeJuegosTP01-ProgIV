import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuedaPreguntasComponent } from './rueda-preguntas.component';

describe('RuedaPreguntasComponent', () => {
  let component: RuedaPreguntasComponent;
  let fixture: ComponentFixture<RuedaPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuedaPreguntasComponent]
    });
    fixture = TestBed.createComponent(RuedaPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
