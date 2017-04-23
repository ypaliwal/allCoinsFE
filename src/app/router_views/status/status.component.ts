import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  private mktcapWeightedRatioTitles: any[] = [];
  private mktcapWeightedRatioValues: any[] = [];

  private highRiskRatio;
  private highRiskRatioTitles: any[] = [];
  private highRiskRatioValues: any[] = [];

  private midRiskRatio;
  private midRiskRatioTitles: any[] = [];
  private midRiskRatioValues: any[] = [];

  private lowRiskRatio;
  private lowRiskRatioTitles: any[] = [];
  private lowRiskRatioValues: any[] = [];

  constructor(private _af: AngularFire,
              private _router: Router) { }

  ngOnInit() {
    this._af.database.object('/')
      .subscribe(result => {
        // console.log(result);

        this.formatMktcapWeightedRatio(result.ticker_new_value);
        this.formatHighRiskRatio(result.ai_ticker_high_risk);
        this.formatMidRiskRatio(result.ai_ticker_medium_risk);
        this.formatLowRiskRatio(result.ai_ticker_low_risk);
      });
  }

  formatMktcapWeightedRatio(dataObj) {

    for(var i = 0; i < dataObj.length; i++) {
      // console.log(dataObj[i]);
      
      var ccyName = Object.keys(dataObj[i])[0];
      var ccyNameFinal = ccyName.charAt(0).toUpperCase() + ccyName.slice(1);
      
      // console.log(ccyNameFinal);
      // console.log(dataObj[i][ccyName]);

      this.mktcapWeightedRatioTitles.push(ccyNameFinal);
      this.mktcapWeightedRatioValues.push(parseFloat(dataObj[i][ccyName]).toFixed(2));
      
    }
    console.log(this.mktcapWeightedRatioValues);
    console.log(this.mktcapWeightedRatioTitles);
  }

  formatHighRiskRatio(dataObj) {
    // console.log(dataObj);

    for(var key in dataObj) {
      var keyNameFinal = key.charAt(0).toUpperCase() + key.slice(1);
      this.highRiskRatioTitles.push(keyNameFinal);
      this.highRiskRatioValues.push(parseFloat(dataObj[key]).toFixed(2)); 
      
    }

    console.log(this.highRiskRatioTitles);
    console.log(this.highRiskRatioValues);
  }

  formatMidRiskRatio(dataObj) {
    // console.log(dataObj);

    for(var key in dataObj) {
      var keyNameFinal = key.charAt(0).toUpperCase() + key.slice(1);
      this.midRiskRatioTitles.push(keyNameFinal);
      this.midRiskRatioValues.push(parseFloat(dataObj[key]).toFixed(2)); 
    }

    console.log(this.midRiskRatioTitles);
    console.log(this.midRiskRatioValues);
  }

  formatLowRiskRatio(dataObj) {
    // console.log(dataObj);

    for(var key in dataObj) {
      var keyNameFinal = key.charAt(0).toUpperCase() + key.slice(1);
      this.lowRiskRatioTitles.push(keyNameFinal);
      this.lowRiskRatioValues.push(parseFloat(dataObj[key]).toFixed(2)); 
    }

    console.log(this.lowRiskRatioTitles);
    console.log(this.lowRiskRatioValues);
  }

}
