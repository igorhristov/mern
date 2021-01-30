import { Component, OnInit, Input, SimpleChange } from '@angular/core'

import { ICustomer } from '../../../shared/interfaces';
import { SorterService } from '../../../core/sorter.service'

@Component({
  selector: 'app-customers-list',
  templateUrl: "./customers-list.component.html"
})

export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = []

  // get customers from peoples passed from customers component
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  // set the customers to the new variable
  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value
      this.calculateOrders()
    }
  }

  filteredCustomers: ICustomer[] = []
  customersOrderTotal: number;
  currencyCode: string = "USD";

  constructor(private sorterService: SorterService) { }

  ngOnInit() {

  }

  // ngOnChanges(changes: SimpleChange) {

  // }

  calculateOrders() {
    this.customersOrderTotal = 0
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal
    })
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return cust.name.toLocaleLowerCase().indexOf(data.toLocaleLowerCase()) > -1 || cust.city.toLocaleLowerCase().indexOf(data.toLocaleLowerCase()) > -1 || cust.orderTotal.toString().indexOf(data) > -1
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
    this.sorterService.sort(this.filteredCustomers, prop)
  }

}
