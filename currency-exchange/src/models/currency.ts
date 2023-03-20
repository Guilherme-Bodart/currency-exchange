import { CurrencyCodeEnum } from 'src/enumerators/currency.enum';
import { IRest } from './rest.interface';

export class ExchangeCurrent implements IRest {
  className = 'Objeto para preenchimento da dashboard';

  exchangeRate!: number;
  lastUpdatedAt!: Date;
  success!: boolean;
  toSymbol!: CurrencyCodeEnum;
  fromSymbol!: CurrencyCodeEnum;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      exchangeRate: this.exchangeRate,
      lastUpdatedAt: this.lastUpdatedAt,
      success: this.success,
      toSymbol: this.toSymbol,
      fromSymbol: this.fromSymbol,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.exchangeRate = data['exchangeRate'] || 0;
      this.lastUpdatedAt = data['lastUpdatedAt'] || new Date();
      this.success = data['success'] || false;
      this.toSymbol = data['toSymbol'] || CurrencyCodeEnum.Brl;
      this.fromSymbol = data['fromSymbol'] || CurrencyCodeEnum.Brl;
    }
    return this;
  }
}

export class DailyExchange implements IRest {
  className = 'Objeto para preenchimento da dashboard';

  data!: Array<DailyExchangeData>;
  lastUpdatedAt!: Date;
  success!: boolean;
  to!: CurrencyCodeEnum;
  from!: CurrencyCodeEnum;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      data: this.data,
      lastUpdatedAt: this.lastUpdatedAt,
      success: this.success,
      to: this.to,
      from: this.from,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.data = data['data'] || 1;
      this.lastUpdatedAt = data['lastUpdatedAt'] || new Date();
      this.success = data['success'] || false;
      this.to = data['to'] || CurrencyCodeEnum.Brl;
      this.from = data['from'] || CurrencyCodeEnum.Brl;
    }
    return this;
  }
}

export class DailyExchangeData implements IRest {
  className = 'Objeto para preenchimento da dashboard';

  close!: number;
  date!: Date;
  high!: number;
  low!: number;
  open!: number;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      close: this.close,
      date: this.date,
      high: this.high,
      low: this.low,
      open: this.open,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.close = data['close'] || 0;
      this.date = data['date'] || new Date();
      this.high = data['high'] || 0;
      this.low = data['low'] || 0;
      this.open = data['open'] || 0;
    }
    return this;
  }
}
