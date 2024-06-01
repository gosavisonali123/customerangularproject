
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://your-api-url'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/customers`, customer);
  }

  // Implement other CRUD methods as needed
}
