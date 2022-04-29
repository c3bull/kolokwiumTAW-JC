import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersJCComponent } from './orders-jc.component';

describe('OrdersJCComponent', () => {
  let component: OrdersJCComponent;
  let fixture: ComponentFixture<OrdersJCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersJCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersJCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
