import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  private withdrawal_amt: any;
  private transaction_account: any;


  constructor(private _af: AngularFire,
              private _router: Router) { }

  ngOnInit() {
  }

  submitWithdrawal() {
    console.log(this.withdrawal_amt);
    console.log(this.transaction_account);

    const withdrawal_orders = this._af.database.list('/withdrawal_orders');
    const transactions = this._af.database.list('/all_transactions');

    var withdrawalObj = {
        withdrawal_amount: -(this.withdrawal_amt),
        transaction_account: this.transaction_account
    }
    
    var transactionObj = {
        withdrawal_amount: -(this.withdrawal_amt),
        transaction_account: this.transaction_account,
        time: Date.now()
    }

    withdrawal_orders.push(withdrawalObj).then(result => {
      transactions.push(transactionObj).then(result => {
        this._router.navigate(['withdrawal_thanks']);
      });
    });

  }

}
