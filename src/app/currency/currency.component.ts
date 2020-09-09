import { Component, Injectable, OnInit } from '@angular/core';
import { Currency } from './currency';
import { CurrencyService } from '../services/currency.service';
import { MessageService } from '../services/message.service';

@Component({
  selector   : 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls  : ['./currency.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CurrencyComponent implements OnInit {
  currency: Currency[];

  selectedCurrency: Currency;

  onSelect(currency: Currency): void {
    this.selectedCurrency = currency;

    this.messageService.add(`CurrencyComponent: Selected currency id=${currency.id}`);
  }

  constructor(private currencyService: CurrencyService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadCurrency();
  }

  public loadCurrency(): void {
    this.currencyService.getCurrency().subscribe(response => {
      this.currency = response.data;
    });
  }

  public getCurrencyCodeById(id: number): number {
    // TODO: get from real data
    const currency = {
      1: 'EUR',
      2: 'USD',
      3: 'GBR',
      4: 'CZK'
    };

    return currency[id];
  }
}
