import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersJCComponent} from "./orders-jc/orders-jc.component";
import {OrdersDetailsJCComponent} from "./orders-details-jc/orders-details-jc.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersJCComponent
  },
  {
    path: 'order/:id',
    component: OrdersDetailsJCComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
