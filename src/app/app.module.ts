import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule } from '@angular/forms';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrencyDetailComponent,
    MessagesComponent,
    ExchangeRatesComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers   : [DatePipe],
  bootstrap   : [AppComponent]
})
export class AppModule {}
