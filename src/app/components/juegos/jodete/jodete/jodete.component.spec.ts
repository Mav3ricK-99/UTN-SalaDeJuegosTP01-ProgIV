import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JodeteComponent } from './jodete.component';

describe('JodeteComponent', () => {
  let component: JodeteComponent;
  let fixture: ComponentFixture<JodeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JodeteComponent]
    });
    fixture = TestBed.createComponent(JodeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
