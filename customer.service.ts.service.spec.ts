import { TestBed } from '@angular/core/testing';

import { Customer.Service.TsService } from './customer.service.ts.service';

describe('Customer.Service.TsService', () => {
  let service: Customer.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customer.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
