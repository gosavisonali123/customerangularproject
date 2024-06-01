

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      pan: ['', [Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
      fullName: ['', [Validators.required, Validators.maxLength(140)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      mobileNumber: ['+91', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addresses: this.formBuilder.array([
        this.createAddressFormGroup()
      ])
    });
  }

  createAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      postcode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      state: [''], // Pre-filled via API
      city: ['']   // Pre-filled via API
    });
  }

  addAddress(): void {
    (this.customerForm.get('addresses') as FormArray).push(this.createAddressFormGroup());
  }

  removeAddress(index: number): void {
    (this.customerForm.get('addresses') as FormArray).removeAt(index);
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const customer: Customer = this.customerForm.value;
      this.customerService.createCustomer(customer).subscribe(
        (createdCustomer: Customer) => {
          console.log('Customer created successfully:', createdCustomer);
          // Reset form or navigate to another page
        },
        error => {
          console.error('Error creating customer:', error);
          // Handle error
        }
      );
    }
  }
}
