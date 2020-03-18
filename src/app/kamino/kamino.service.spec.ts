import { TestBed } from '@angular/core/testing';

import { KaminoService } from './kamino.service';

describe('KaminoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KaminoService = TestBed.get(KaminoService);
    expect(service).toBeTruthy();
  });
});
