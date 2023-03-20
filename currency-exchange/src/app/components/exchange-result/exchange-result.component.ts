import { Component, Input, OnInit } from '@angular/core';
import { CurrencyCodeEnum } from 'src/enumerators/currency.enum';
import { ExchangeCurrent } from 'src/models/currency';

@Component({
  selector: 'app-exchange-result',
  templateUrl: './exchange-result.component.html',
  styleUrls: ['./exchange-result.component.css']
})
export class ExchangeResultComponent implements OnInit {

  @Input() currencyCode: any;
  @Input() currencyCodeExchanged: any;
  @Input() exchangeCurrent: ExchangeCurrent = new ExchangeCurrent({});

  constructor() { }

  ngOnInit(): void {
  }

}
