import {Component, OnInit} from '@angular/core';
import {JCDataService} from "../service/jc-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-jc',
  templateUrl: './orders-details-jc.component.html',
  styleUrls: ['./orders-details-jc.component.css']
})
export class OrdersDetailsJCComponent implements OnInit {
  public id: number = 0;
  public image: string = '';
  public text: string = '';
  public title: string = '';

  constructor(private service: JCDataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.id = param.get('id')
      this.showOrder(this.id)
    })
  }

  showOrder(id: number) {
    this.service.getSingleOrder(id).subscribe((response: any) => {
      this.id = response.id;
      this.image = response.image;
      this.text = response.text;
      this.title = response.title;
    })
  }
}
