import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExchangeCardComponent } from './daily-exchange-card.component';

describe('DailyExchangeCardComponent', () => {
  let component: DailyExchangeCardComponent;
  let fixture: ComponentFixture<DailyExchangeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyExchangeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExchangeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
