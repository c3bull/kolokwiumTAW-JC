import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrdersJCComponent} from './orders-jc/orders-jc.component';
import {OrdersItemJCComponent} from './orders-item-jc/orders-item-jc.component';
import {OrdersDetailsJCComponent} from './orders-details-jc/orders-details-jc.component';
import {HttpClientModule} from "@angular/common/http";
import {JCDataService} from "./service/jc-data.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersJCComponent,
    OrdersItemJCComponent,
    OrdersDetailsJCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JCDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
