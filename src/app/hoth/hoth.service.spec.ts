import { TestBed } from '@angular/core/testing';

import { HothService } from './hoth.service';

describe('HothService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HothService = TestBed.get(HothService);
    expect(service).toBeTruthy();
  });
});
