import { TestBed } from '@angular/core/testing';

import { JumioService } from './jumio.service';

describe('JumioService', () => {
  let service: JumioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JumioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
