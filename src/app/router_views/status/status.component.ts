import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  private mktcapWeightedRatio;
  private mktcapWeightedRatioTitles: any[] = [];
  private mktcapWeightedRatioValues: any[] = [];

  private highRiskRatio;

  private midRiskRatio;

  private lowRiskRatio;

  constructor(private _af: AngularFire,
              private _router: Router) { }

  ngOnInit() {
    this._af.database.object('/')
      .subscribe(result => {
        // console.log(result);

        this.formatMktcapWeightedRatio(result.ticker_new_value);
      });
  }

  formatMktcapWeightedRatio(dataObj) {

    for(var i = 0; i < dataObj.length; i++) {
      console.log(dataObj[i]);
      
      var ccyName = Object.keys(dataObj[i])[0];
      var ccyNameFinal = ccyName.charAt(0).toUpperCase() + ccyName.slice(1);
      
      console.log(ccyNameFinal);
      console.log(dataObj[i][ccyName]);

      this.mktcapWeightedRatioValues.push(dataObj[i][ccyName]);
      this.mktcapWeightedRatioTitles.push(ccyNameFinal);
    }
    console.log(this.mktcapWeightedRatioValues);
    console.log(this.mktcapWeightedRatioTitles);
  }

}
