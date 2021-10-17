import { TestBed } from '@angular/core/testing';

import { ErrorMetaDataService } from './error-meta-data.service';

describe('ErrorMetaDataService', () => {
  let service: ErrorMetaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMetaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
