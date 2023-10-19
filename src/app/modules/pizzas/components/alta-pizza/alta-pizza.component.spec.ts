import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPizzaComponent } from './alta-pizza.component';

describe('AltaPizzaComponent', () => {
  let component: AltaPizzaComponent;
  let fixture: ComponentFixture<AltaPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaPizzaComponent]
    });
    fixture = TestBed.createComponent(AltaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
