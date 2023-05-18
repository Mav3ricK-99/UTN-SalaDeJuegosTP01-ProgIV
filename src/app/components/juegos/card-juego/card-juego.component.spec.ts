import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJuegoComponent } from './card-juego.component';

describe('CardJuegoComponent', () => {
  let component: CardJuegoComponent;
  let fixture: ComponentFixture<CardJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardJuegoComponent]
    });
    fixture = TestBed.createComponent(CardJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
