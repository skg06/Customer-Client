import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Customer } from '../shared/models/customer';
import { CustomerService } from '../shared/services/customer.service';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit, AfterViewInit {
  @ViewChild('search', { static: false }) search: any;
  datasource: any;
  public customers: Array<object> = [];
  public columns: Array<object>;
  public temp: Array<object> = [];
  constructor(public customerService: CustomerService, private router: Router){
    this. columns = [
      { prop: 'firstName', name: 'Firstname' },
      { prop: 'lastName', name: 'Lastname'  },
      { prop: 'addressLine1' , name: 'Address1' },
      { prop: 'addressLine2' , name: 'Address2' },
      { prop: 'mobile' , name: 'Mobile' },
      { prop: 'city' , name: 'City' },
      { prop: 'pincode' , name: 'Pincode' }
    ];
   }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(
      data => {
        this.customers = data;
        this.temp = data;
      })  
    }

    navigate(){
      this.router.navigate(['/addcustomer']);
    }

    ngAfterViewInit(): void {
     
      fromEvent(this.search.nativeElement, 'keydown')
        .pipe(
          debounceTime(550),
          map(x => x['target']['value'])
        )
        .subscribe(value => {
          this.updateFilter(value);
        });
    }

    updateFilter(val: any) {
      const value = val.toString().toLowerCase().trim();
      // get the amount of columns in the table
      const count = this.columns.length;
      // get the key names of each column in the dataset
      const keys = Object.keys(this.temp[0]);
      // assign filtered matches to the active datatable
      this.customers = this.temp.filter(item => {
        // iterate through each row's column data
        for (let i = 0; i < count; i++) {
          // check for a match
          if (
            (item[keys[i]] &&
              item[keys[i]]
                .toString()
                .toLowerCase()
                .indexOf(value) !== -1) ||
            !value
          ) {
            // found match, return true to add to result set
            return true;
          }
        }
      });
  
      // Whenever the filter changes, always go back to the first page
      // this.table.offset = 0;
    }

    
}
