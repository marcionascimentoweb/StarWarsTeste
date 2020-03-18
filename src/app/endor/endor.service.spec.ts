import { TestBed } from '@angular/core/testing';

import { EndorService } from './endor.service';

describe('EndorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndorService = TestBed.get(EndorService);
    expect(service).toBeTruthy();
  });
});
