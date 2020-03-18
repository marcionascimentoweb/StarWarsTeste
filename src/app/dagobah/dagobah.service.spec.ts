import { TestBed } from '@angular/core/testing';

import { DagobahService } from './dagobah.service';

describe('DagobahService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DagobahService = TestBed.get(DagobahService);
    expect(service).toBeTruthy();
  });
});
