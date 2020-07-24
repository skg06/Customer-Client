import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormBuilder, Validator, Validators} from '@angular/forms'
import { Customer } from '../models/customer';
import { Constant } from '../constant';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(private httpClient: HttpClient, private fb: FormBuilder) {}

    form = this.fb.group({
        id: null,
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        addressLine1: [null, Validators.required],
        addressLine2: [null, Validators.required],
        mobile: [null, Validators.required],
        city: [null, Validators.required],
        pincode: [null, Validators.required]
    });

    get f() {return this.form.controls;}

    getCustomers(): Observable<Customer[]> {
         return this.httpClient.get<Customer[]>(`${Constant.apiUrl}customers`);
    }

    addCustomer(customer: Customer) {
        return this.httpClient.post<Customer>(`${Constant.apiUrl}customers`, customer);
    }

}

