import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../currency/currency';

@Component({
  selector   : 'app-currency-detail',
  templateUrl: './currency-detail.component.html'
})
export class CurrencyDetailComponent implements OnInit {
  @Input() currency: Currency;

  constructor() { }

  ngOnInit(): void { }
}
