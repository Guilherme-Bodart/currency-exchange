import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { DailyExchangeData } from 'src/models/currency';
@Component({
  selector: 'app-daily-exchange-card',
  templateUrl: './daily-exchange-card.component.html',
  styleUrls: ['./daily-exchange-card.component.css']
})
export class DailyExchangeCardComponent implements OnInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;


  @Input() dailyExchange: DailyExchangeData = new DailyExchangeData({});
  @Input() differenceExchange: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
