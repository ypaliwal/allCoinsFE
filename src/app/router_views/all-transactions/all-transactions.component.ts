import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {

  private transactions: any[] = [];
  private aum = 0;
  private aumShow = false;

  constructor(private _af: AngularFire,
              private _router: Router) { }


  ngOnInit() {
    this._af.database.object('/all_transactions')
            .subscribe(result => {
              
              // console.log(result);
              this.populateTransactionsArr(result);
            });
  }

  populateTransactionsArr(input) {
    for(var key in input) {
      console.log(input[key]);
      var tempObj = input[key];

      if(tempObj.purchase_currency == 'eth') {
        tempObj.purchase_currency_clean = "Ethereum";
      } else if(tempObj.purchase_currency == 'btc') {
        tempObj.purchase_currency_clean = "Bitcoin";
      } else {
        tempObj.purchase_currency_clean = "Other";
      }

      // console.log(tempObj.purchase_amount);
      // console.log(parseInt(tempObj.purchase_amount) < 0);

      if(tempObj.purchase_amount != undefined && tempObj.purchase_amount > 0) {
        tempObj.value_above_zero = true;
        this.aum += tempObj.purchase_amount;
        this.aumShow = true;
      } else if (tempObj.withdrawal_amount != undefined && tempObj.withdrawal_amount < 0) {
        tempObj.value_above_zero = false;
        this.aum += tempObj.withdrawal_amount;
        this.aumShow = true;
      }

      // console.log(input[key]);
      this.transactions.push(tempObj);
    }

    console.log(this.transactions);
  }

}
