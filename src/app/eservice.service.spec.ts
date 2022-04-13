import { TestBed } from '@angular/core/testing';

import { EserviceService } from './eservice.service';

describe('EserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EserviceService = TestBed.get(EserviceService);
    expect(service).toBeTruthy();
  });
});
