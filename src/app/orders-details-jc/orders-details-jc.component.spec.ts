import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsJCComponent } from './orders-details-jc.component';

describe('OrdersDetailsJCComponent', () => {
  let component: OrdersDetailsJCComponent;
  let fixture: ComponentFixture<OrdersDetailsJCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsJCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsJCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
