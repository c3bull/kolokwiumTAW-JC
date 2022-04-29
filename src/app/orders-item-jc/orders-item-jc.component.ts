import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-jc',
  templateUrl: './orders-item-jc.component.html',
  styleUrls: ['./orders-item-jc.component.css']
})
export class OrdersItemJCComponent implements OnInit {
  @Input() id?: number;
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
