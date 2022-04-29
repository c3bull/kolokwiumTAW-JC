import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemJCComponent } from './orders-item-jc.component';

describe('OrdersItemJCComponent', () => {
  let component: OrdersItemJCComponent;
  let fixture: ComponentFixture<OrdersItemJCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemJCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemJCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
