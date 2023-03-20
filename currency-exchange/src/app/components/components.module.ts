import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExchangeResultComponent } from './exchange-result/exchange-result.component';
import { DailyExchangeCardComponent } from './last-month-exchange/daily-exchange-card/daily-exchange-card.component';
import { LastMonthExchangeComponent } from './last-month-exchange/last-month-exchange.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ExchangeResultComponent,
    LastMonthExchangeComponent,
    DailyExchangeCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    ExchangeResultComponent,
    LastMonthExchangeComponent,
    DailyExchangeCardComponent
  ]
})
export class ComponentsModule { }
