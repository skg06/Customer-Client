import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import { Customer } from '../shared/models/customer';
import { CustomerService } from '../shared/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customer: Customer;
  constructor(public customerService: CustomerService, public spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addCustomers(form: NgForm) {
    this.spinner.show();
    this.customer = form.value;

    this.customerService.addCustomer(this.customer).subscribe(result => {      
      this.spinner.hide();
      this.router.navigate(['/'])
    })
    
  }
}
