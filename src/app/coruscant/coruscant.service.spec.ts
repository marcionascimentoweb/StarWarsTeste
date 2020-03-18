import { TestBed } from '@angular/core/testing';

import { CoruscantService } from './coruscant.service';

describe('CoruscantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoruscantService = TestBed.get(CoruscantService);
    expect(service).toBeTruthy();
  });
});
