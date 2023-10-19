import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePizzasComponent } from './detalle-pizzas.component';

describe('DetallePizzasComponent', () => {
  let component: DetallePizzasComponent;
  let fixture: ComponentFixture<DetallePizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePizzasComponent]
    });
    fixture = TestBed.createComponent(DetallePizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
