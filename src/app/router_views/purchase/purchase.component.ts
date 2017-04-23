import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  // Form Variables
  private purchase_curr: any;
  private purchase_amt: any;
  private transaction_account: any;

  constructor(private _af: AngularFire,
              private _router: Router) { }

  ngOnInit() {
  }

  purchaseSubmit() {
    console.log(this.purchase_curr);
    console.log(this.purchase_amt);
    console.log(this.transaction_account);

    const purchase_orders = this._af.database.list('/purchase_orders');
    const transactions = this._af.database.list('/all_transactions');

    var purchaseObj = {
        purchase_currency: this.purchase_curr,
        purchase_amount: this.purchase_amt,
        transaction_account: this.transaction_account
    }
    
    var transactionObj = {
        purchase_currency: this.purchase_curr,
        purchase_amount: parseFloat(this.purchase_amt),
        transaction_account: this.transaction_account,
        time: Date.now()
    }

    purchase_orders.push(purchaseObj).then(result => {
      transactions.push(transactionObj).then(result => {
        this._router.navigate(['purchase_thanks']);
      });
    });
  }




}


// - Dropdown - ETH or BTC
// - Input box - “How Much? in USD” (ETH/BTC)
// - Input Box - Address  - Deposit (and Withdraw… later)
// - Button - GO!
//    - Show popup of address hash to send to