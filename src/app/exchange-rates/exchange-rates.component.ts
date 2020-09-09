import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from './exchange-rate';
import { CurrencyService } from '../services/currency.service';
import { CurrencyComponent } from '../currency/currency.component';

@Component({
  selector   : 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls  : ['../currency/currency.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  exchangeRates: ExchangeRate[];

  constructor(private currencyService: CurrencyService, private currencyComponent: CurrencyComponent) { }

  ngOnInit(): void {
    this.loadExchangeRates();
  }

  public loadExchangeRates(): void {
    this.currencyService.getExchangeRates().subscribe(response => {
      this.exchangeRates = response.data.map((rate: any) => ({
        code : this.currencyComponent.getCurrencyCodeById(rate.currency_id),
        value: rate.value
      }));
    });
  }
}
