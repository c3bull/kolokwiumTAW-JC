import { TestBed } from '@angular/core/testing';

import { JCDataService } from './jc-data.service';

describe('JCDataService', () => {
  let service: JCDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JCDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
