import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }          from './app.routing';

import { APICallsService } from './services/apicalls.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './router_views/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [APICallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
