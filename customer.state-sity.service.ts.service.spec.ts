import { TestBed } from '@angular/core/testing';

import { Customer.StateSity.Service.TsService } from './customer.state-sity.service.ts.service';

describe('Customer.StateSity.Service.TsService', () => {
  let service: Customer.StateSity.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customer.StateSity.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
