import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // go to activating route grab snapshot of the data and pass the id
    console.log(+this.route.snapshot.paramMap.get('id'));

    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });


    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

}
