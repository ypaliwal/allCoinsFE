import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { APICallsService } from '../../services/apicalls.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _apiSrv: APICallsService,
              private _router: Router) { }

  ngOnInit() {
    this._apiSrv.getCCYPrices();
  }

  goToDeposit() {
    this._router.navigate(['purchase']);
  }

}
