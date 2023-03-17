import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMonthExchangeComponent } from './last-month-exchange.component';

describe('LastMonthExchangeComponent', () => {
  let component: LastMonthExchangeComponent;
  let fixture: ComponentFixture<LastMonthExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMonthExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMonthExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
