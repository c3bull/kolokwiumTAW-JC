import {Component, OnInit} from '@angular/core';
import {JCDataService} from "../service/jc-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orders-jc',
  templateUrl: './orders-jc.component.html',
  styleUrls: ['./orders-jc.component.css']
})
export class OrdersJCComponent implements OnInit {

  orders$: any;

  constructor(private service: JCDataService, private route: Router) {
  }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders() {
    this.service.getAllOrders().subscribe(response => {
      this.orders$ = response;
    })
  }

  goToDetails(id: number) {
    this.route.navigate(['/order/' + id])
  }
}
