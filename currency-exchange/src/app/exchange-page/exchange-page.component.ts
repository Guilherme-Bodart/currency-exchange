import { Component, OnInit } from '@angular/core';
import { CurrencyCodeEnum } from 'src/enumerators/currency.enum';
import { CurrencyExchangeService } from '../services/currency-exchange.service';
import { DailyExchange, ExchangeCurrent } from 'src/models/currency';

@Component({
  selector: 'app-exchange-page',
  templateUrl: './exchange-page.component.html',
  styleUrls: ['./exchange-page.component.css']
})
export class ExchangePageComponent implements OnInit {

  exchangeShow = false;
  exchangeLoadingShow = false;
  currenctCodeEnum = CurrencyCodeEnum;
  currencyList = Object.values(CurrencyCodeEnum);

  exchangeCurrent: ExchangeCurrent = new ExchangeCurrent({});
  dailyExchange: DailyExchange = new DailyExchange({});

  currencyCode: CurrencyCodeEnum = CurrencyCodeEnum.Brl;
  codeExchange: CurrencyCodeEnum = CurrencyCodeEnum.Brl;

  constructor(private currencyExchangeService: CurrencyExchangeService) { }

  ngOnInit(): void {
  }

  changeCurrencyCode(event: any) {
    this.currencyCode = event.target.value;
  }

  resultExchange() {
    this.exchangeShow = false;
    this.exchangeLoadingShow = true;

    this.currencyExchangeService.getCurrentExchangeRate(this.currencyCode, CurrencyCodeEnum.Brl).subscribe((res) => {
      this.exchangeCurrent = res as ExchangeCurrent;

      this.currencyExchangeService.getDailyExchangeRate(this.currencyCode, CurrencyCodeEnum.Brl).subscribe(res => {
        this.dailyExchange = res as DailyExchange;
        this.exchangeLoadingShow = false;
        this.exchangeShow = true;
        this.codeExchange = this.currencyCode;
      })
    })


  }


}
