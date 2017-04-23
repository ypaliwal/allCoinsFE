import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }          from './app.routing';

import { APICallsService } from './services/apicalls.service';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LandingComponent } from './router_views/landing/landing.component';
import { HeaderComponent } from './router_views/header/header.component';
import { PurchaseComponent } from './router_views/purchase/purchase.component';
import { WithdrawComponent } from './router_views/withdraw/withdraw.component';
import { StatusComponent } from './router_views/status/status.component';
import { AllTransactionsComponent } from './router_views/all-transactions/all-transactions.component';
import { PurchaseThanksComponent } from './router_views/purchase-thanks/purchase-thanks.component';
import { WithdrawalThanksComponent } from './router_views/withdrawal-thanks/withdrawal-thanks.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCfCoy3KRxV25sCv42Ua7JIFsGx9vp_nTk",
  authDomain: "blockgeeks-e61a4.firebaseapp.com",
  databaseURL: "https://blockgeeks-e61a4.firebaseio.com",
  projectId: "blockgeeks-e61a4",
  storageBucket: "blockgeeks-e61a4.appspot.com",
  messagingSenderId: "192439168836"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    PurchaseComponent,
    WithdrawComponent,
    StatusComponent,
    AllTransactionsComponent,
    PurchaseThanksComponent,
    WithdrawalThanksComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [APICallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
