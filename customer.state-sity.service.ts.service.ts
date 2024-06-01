import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersSubject: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  public customers$: Observable<Customer[]> = this.customersSubject.asObservable();

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    // Implement logic to fetch customers from local storage
  }

  addCustomer(customer: Customer): void {
    // Implement logic to add a new customer to local storage
  }

  updateCustomer(customer: Customer): void {
    // Implement logic to update an existing customer in local storage
  }

  deleteCustomer(customerId: string): void {
    // Implement logic to delete a customer from local storage
  }
}
