import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer.FormComponent } from './customer.form.component';

describe('Customer.FormComponent', () => {
  let component: Customer.FormComponent;
  let fixture: ComponentFixture<Customer.FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customer.FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customer.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
