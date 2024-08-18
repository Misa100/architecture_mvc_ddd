import { TestBed } from '@angular/core/testing';

import { ProductMvcService } from './product-mvc.service';

describe('ProductMvcService', () => {
  let service: ProductMvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductMvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
