import { TestBed } from '@angular/core/testing';

import { NabooService } from './naboo.service';

describe('NabooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NabooService = TestBed.get(NabooService);
    expect(service).toBeTruthy();
  });
});
