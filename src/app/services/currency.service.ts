import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currencyUrl      = 'api/v1.0/currency';
  private exchangeRatesUrl = 'api/v1.0/exchange_rates';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    public datepipe: DatePipe
  ) { }

  public getCurrency(): Observable<any> {
    const response = this.http.get<any>(environment.apiHost + this.currencyUrl);

    this.messageService.add('CurrencyService: fetched currency');

    return response;
  }

  public getExchangeRates(): Observable<any> {
    const params   = new HttpParams().set('date', this.datepipe.transform(new Date(), 'yyyyMMdd'));
    const response = this.http.get<any>(environment.apiHost + this.exchangeRatesUrl, {params});

    this.messageService.add('CurrencyService: fetched exchange rates');

    return response;
  }
}
