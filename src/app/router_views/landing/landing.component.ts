import { Component, OnInit } from '@angular/core';

import { APICallsService } from '../../services/apicalls.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _apiSrv: APICallsService) { }

  ngOnInit() {
    this._apiSrv.getCCYPrices();
  }

}
