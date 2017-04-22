import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class APICallsService {

  constructor(private _http: Http) { }

  getCCYPrices() {
    // var ccyPricesURL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
    // var ccyPricesURL = "https://api.cryptonator.com/api/ticker/btc-usd";
    var ccyPricesURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR";

    this._http.get(ccyPricesURL).subscribe(prices => {
      console.log(prices.json());
      
      // for(var i = 0; i < rawVotesArr.length; i++) {
      //   if(rawVotesArr[i].bill_url != null && count < 20) {
      //     this.votes.push(rawVotesArr[i]);
      //     count++;
      //   }
      // }
    });
  }

}
