import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CurrencyExchangeService } from 'src/app/services/currency-exchange.service';
import { CurrencyCodeEnum } from 'src/enumerators/currency.enum';
import { DailyExchange, DailyExchangeData } from 'src/models/currency';
@Component({
  selector: 'app-last-month-exchange',
  templateUrl: './last-month-exchange.component.html',
  styleUrls: ['./last-month-exchange.component.css']
})
export class LastMonthExchangeComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;
  today = new Date().getTime();
  lastThirtyDays = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).getTime();
  cardShowList: Array<any> = []; // Lista que realmente mostra
  exchangeMonthList: Array<any> = []; // Lista que fica gravada
  oneDayMoreExchange: DailyExchangeData = new DailyExchangeData({}); // Pra comparar o ultimo dia dos 30 dias com próximo

  @Input() currencyCode: any;
  @Input() currencyCodeExchanged: any;
  @Input() dailyExchange: DailyExchange = new DailyExchange({});

  constructor() { }

  ngOnInit(): void {
    // Filtra os últimos 30 dias
    this.exchangeMonthList = this.dailyExchange.data.filter(data =>
      new Date(data.date).getTime() >= this.lastThirtyDays
    );
    this.cardShowList = this.exchangeMonthList;
    this.oneDayMoreExchange = this.dailyExchange.data[this.exchangeMonthList.length];
    this.oneDayMoreExchange.close
  }

  hideShowList(show: boolean) {
    if (show) {
      this.cardShowList = this.exchangeMonthList;
    } else {
      this.cardShowList = [];
    }
  }

}
