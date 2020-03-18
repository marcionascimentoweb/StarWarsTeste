import { TestBed } from '@angular/core/testing';

import { BespinService } from './bespin.service';

describe('BespinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BespinService = TestBed.get(BespinService);
    expect(service).toBeTruthy();
  });
});
