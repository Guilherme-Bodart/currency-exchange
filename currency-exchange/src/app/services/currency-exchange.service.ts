import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyCodeEnum } from 'src/enumerators/currency.enum';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {

  _urlCurrentExchangeRate = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=:fromCurrencyCode&to_symbol=:toCurrencyCode';
  _urlDailyExchangeRate = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=:fromCurrencyCode&to_symbol=:toCurrencyCode';

  constructor(private _http: HttpClient) {

  }

  getCurrentExchangeRate(fromCode: CurrencyCodeEnum, toCode: CurrencyCodeEnum) {
    let url = this._urlCurrentExchangeRate.replace(':fromCurrencyCode', fromCode);
    url = url.replace(':toCurrencyCode', toCode);
    return this._http.get(url);
  }

  getDailyExchangeRate(fromCode: CurrencyCodeEnum, toCode: CurrencyCodeEnum) {
    let url = this._urlDailyExchangeRate.replace(':fromCurrencyCode', fromCode);
    url = url.replace(':toCurrencyCode', toCode);
    return this._http.get(url);
  }
}
